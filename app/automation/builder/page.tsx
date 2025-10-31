'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions
interface NodeConfig {
  [key: string]: string | number;
}

interface WorkflowNodeType {
  id: string;
  type: 'trigger' | 'action' | 'logic' | 'ai';
  nodeType: string;
  title: string;
  description: string;
  x: number;
  y: number;
  config: NodeConfig;
}

interface Connection {
  from: string;
  to: string;
  condition?: string;
}

interface NodeTypeConfig {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface WorkflowNodeProps {
  node: WorkflowNodeType;
  isSelected: boolean;
  onSelect: (node: WorkflowNodeType) => void;
  onDrag: (e: React.MouseEvent, node: WorkflowNodeType) => void;
  onStartConnection: (node: WorkflowNodeType) => void;
}

interface ConnectionLineProps {
  from: string;
  to: string;
  condition?: string;
}
import { 
  Zap, 
  Plus, 
  Play, 
  Pause, 
  Save, 
  Download, 
  Upload, 
  Settings, 
  Trash2, 
  Copy, 
  Edit3,
  GitBranch,
  Database,
  Mail,
  Calendar,
  Users,
  ShoppingCart,
  BarChart3,
  Bell,
  Clock,
  Filter,
  Code,
  Webhook,
  Globe,
  Smartphone,
  FileText,
  MessageSquare,
  CreditCard,
  Search,
  ArrowRight,
  ArrowDown,
  CheckCircle,
  AlertCircle,
  Info,
  X,
  Maximize2,
  Minimize2,
  RotateCcw,
  Share2,
  Eye,
  EyeOff,
  Layers,
  Grid,
  Move,
  MousePointer,
  Workflow,
  Bot,
  Lightbulb,
  Target,
  Timer,
  Activity,
  TrendingUp
} from 'lucide-react';

// Node Types Configuration
const nodeTypes = {
  triggers: [
    { id: 'webhook', name: 'Webhook', icon: Webhook, color: 'from-blue-500 to-blue-600' },
    { id: 'schedule', name: 'Schedule', icon: Clock, color: 'from-green-500 to-green-600' },
    { id: 'email', name: 'Email Received', icon: Mail, color: 'from-purple-500 to-purple-600' },
    { id: 'form', name: 'Form Submit', icon: FileText, color: 'from-orange-500 to-orange-600' },
    { id: 'crm', name: 'CRM Event', icon: Users, color: 'from-pink-500 to-pink-600' },
    { id: 'ecommerce', name: 'Order Created', icon: ShoppingCart, color: 'from-indigo-500 to-indigo-600' }
  ],
  actions: [
    { id: 'send_email', name: 'Send Email', icon: Mail, color: 'from-red-500 to-red-600' },
    { id: 'create_record', name: 'Create Record', icon: Database, color: 'from-teal-500 to-teal-600' },
    { id: 'update_crm', name: 'Update CRM', icon: Users, color: 'from-blue-500 to-blue-600' },
    { id: 'send_sms', name: 'Send SMS', icon: Smartphone, color: 'from-green-500 to-green-600' },
    { id: 'create_task', name: 'Create Task', icon: CheckCircle, color: 'from-purple-500 to-purple-600' },
    { id: 'webhook_post', name: 'Webhook POST', icon: Webhook, color: 'from-orange-500 to-orange-600' }
  ],
  logic: [
    { id: 'condition', name: 'Condition', icon: GitBranch, color: 'from-yellow-500 to-yellow-600' },
    { id: 'delay', name: 'Delay', icon: Timer, color: 'from-gray-500 to-gray-600' },
    { id: 'filter', name: 'Filter', icon: Filter, color: 'from-cyan-500 to-cyan-600' },
    { id: 'loop', name: 'Loop', icon: RotateCcw, color: 'from-emerald-500 to-emerald-600' }
  ],
  ai: [
    { id: 'ai_classify', name: 'AI Classify', icon: Bot, color: 'from-violet-500 to-violet-600' },
    { id: 'ai_extract', name: 'Extract Data', icon: Lightbulb, color: 'from-rose-500 to-rose-600' },
    { id: 'ai_generate', name: 'Generate Text', icon: FileText, color: 'from-amber-500 to-amber-600' },
    { id: 'ai_translate', name: 'Translate', icon: Globe, color: 'from-sky-500 to-sky-600' }
  ]
};

  // Sample workflow nodes
const initialNodes: WorkflowNodeType[] = [
  {
    id: '1',
    type: 'trigger',
    nodeType: 'webhook',
    title: 'Webhook Trigger',
    description: 'Receives webhook from website form',
    x: 100,
    y: 100,
    config: {
      url: 'https://api.example.com/webhook',
      method: 'POST'
    }
  },
  {
    id: '2',
    type: 'action',
    nodeType: 'create_record',
    title: 'Create Lead',
    description: 'Create new lead in CRM',
    x: 400,
    y: 100,
    config: {
      system: 'Salesforce',
      object: 'Lead'
    }
  },
  {
    id: '3',
    type: 'logic',
    nodeType: 'condition',
    title: 'Check Lead Score',
    description: 'If lead score > 80',
    x: 700,
    y: 100,
    config: {
      field: 'lead_score',
      operator: '>',
      value: 80
    }
  },
  {
    id: '4',
    type: 'action',
    nodeType: 'send_email',
    title: 'Send Welcome Email',
    description: 'High-priority lead email',
    x: 1000,
    y: 50,
    config: {
      template: 'high_priority_welcome',
      to: '{{lead.email}}'
    }
  },
  {
    id: '5',
    type: 'action',
    nodeType: 'create_task',
    title: 'Create Follow-up Task',
    description: 'Task for sales team',
    x: 1000,
    y: 200,
    config: {
      assignee: 'sales_team',
      priority: 'high'
    }
  }
];

const initialConnections: Connection[] = [
  { from: '1', to: '2' },
  { from: '2', to: '3' },
  { from: '3', to: '4', condition: 'true' },
  { from: '3', to: '5', condition: 'false' }
];

export default function WorkflowBuilder() {
  const [nodes, setNodes] = useState<WorkflowNodeType[]>(initialNodes);
  const [connections, setConnections] = useState<Connection[]>(initialConnections);
  const [selectedNode, setSelectedNode] = useState<WorkflowNodeType | null>(null);
  const [draggedNode, setDraggedNode] = useState<WorkflowNodeType | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [canvasOffset, setCanvasOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showNodePanel, setShowNodePanel] = useState<boolean>(true);
  const [showProperties, setShowProperties] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<keyof typeof nodeTypes>('triggers');

  const canvasRef = useRef(null);
  const [dragConnection, setDragConnection] = useState<Connection | null>(null);

  // Node Component
  const WorkflowNode: React.FC<WorkflowNodeProps> = ({ node, isSelected, onSelect, onDrag, onStartConnection }) => {
    const nodeConfig = Object.values(nodeTypes).flat().find(n => n.id === node.nodeType);
    const IconComponent = nodeConfig?.icon || Zap;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`absolute cursor-pointer select-none ${isSelected ? 'z-20' : 'z-10'}`}
        style={{
          left: node.x,
          top: node.y,
          transform: `scale(${zoom})`
        }}
        onClick={() => onSelect(node)}
        onMouseDown={(e) => onDrag(e, node)}
      >
        <div
          className={`bg-white rounded-xl shadow-lg border-2 transition-all ${
            isSelected ? 'border-purple-500 shadow-purple-200' : 'border-gray-200 hover:border-gray-300'
          } min-w-[200px] max-w-[250px]`}
        >
          {/* Node Header */}
          <div className={`bg-gradient-to-r ${nodeConfig?.color || 'from-gray-500 to-gray-600'} text-white p-3 rounded-t-xl flex items-center`}>
            <div className="flex items-center flex-1">
              <IconComponent className="w-5 h-5 mr-2" />
              <span className="font-medium text-sm truncate">{node.title}</span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onStartConnection(node);
                }}
                className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Node Content */}
          <div className="p-3">
            <p className="text-xs text-gray-600 mb-2">{node.description}</p>
            {node.config && (
              <div className="space-y-1">
                {Object.entries(node.config).slice(0, 2).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 capitalize">{key.replace('_', ' ')}:</span>
                    <span className="text-gray-700 truncate max-w-24" title={String(value)}>
                      {String(value)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Connection Points */}
          {node.type !== 'trigger' && (
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-2 border-white shadow"></div>
          )}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow"></div>
        </div>
      </motion.div>
    );
  };

  // Connection Line Component
  const ConnectionLine: React.FC<ConnectionLineProps> = ({ from, to, condition }) => {
    const fromNode = nodes.find(n => n.id === from);
    const toNode = nodes.find(n => n.id === to);
    
    if (!fromNode || !toNode) return null;

    const startX = fromNode.x + 250;
    const startY = fromNode.y + 60;
    const endX = toNode.x;
    const endY = toNode.y + 60;

    const path = `M ${startX} ${startY} C ${startX + 50} ${startY}, ${endX - 50} ${endY}, ${endX} ${endY}`;

    return (
      <g>
        <path
          d={path}
          stroke={condition === 'true' ? '#10b981' : condition === 'false' ? '#ef4444' : '#8b5cf6'}
          strokeWidth="2"
          fill="none"
          className="drop-shadow-sm"
          markerEnd="url(#arrowhead)"
        />
        {condition && (
          <text
            x={(startX + endX) / 2}
            y={(startY + endY) / 2 - 10}
            className="fill-gray-600 text-xs font-medium"
            textAnchor="middle"
          >
            {condition}
          </text>
        )}
      </g>
    );
  };

  // Node Panel Component
  const NodePanel = () => (
    <AnimatePresence>
      {showNodePanel && (
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          className="fixed left-0 top-16 bottom-0 w-80 bg-white border-r border-gray-200 shadow-lg z-30 overflow-y-auto"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Add Nodes</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNodePanel(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-1 mb-6">
              {Object.keys(nodeTypes).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type as keyof typeof nodeTypes)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === type
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {nodeTypes[activeTab]?.map((nodeType) => (
                <motion.div
                  key={nodeType.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 border border-gray-200"
                  onClick={() => {
                    // Add new node logic here
                    const newNode: WorkflowNodeType = {
                      id: Date.now().toString(),
                      type: activeTab === 'triggers' ? 'trigger' : activeTab === 'logic' ? 'logic' : activeTab === 'ai' ? 'ai' : 'action',
                      nodeType: nodeType.id,
                      title: nodeType.name,
                      description: `New ${nodeType.name}`,
                      x: 200 + Math.random() * 200,
                      y: 200 + Math.random() * 200,
                      config: {}
                    };
                    setNodes([...nodes, newNode]);
                  }}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 bg-gradient-to-r ${nodeType.color} rounded-lg flex items-center justify-center mr-3`}>
                      <nodeType.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{nodeType.name}</div>
                      <div className="text-xs text-gray-500">
                        {activeTab === 'triggers' && 'Starts workflow'}
                        {activeTab === 'actions' && 'Performs action'}
                        {activeTab === 'logic' && 'Controls flow'}
                        {activeTab === 'ai' && 'AI-powered'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Properties Panel Component
  const PropertiesPanel = () => (
    <AnimatePresence>
      {showProperties && (
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          className="fixed right-0 top-16 bottom-0 w-80 bg-white border-l border-gray-200 shadow-lg z-30 overflow-y-auto"
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Properties</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowProperties(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {selectedNode ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Node Title</label>
                  <input
                    type="text"
                    value={selectedNode.title}
                    onChange={(e) => {
                      const updatedNodes = nodes.map(node =>
                        node.id === selectedNode.id ? { ...node, title: e.target.value } : node
                      );
                      setNodes(updatedNodes);
                      setSelectedNode({ ...selectedNode, title: e.target.value });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={selectedNode.description}
                    onChange={(e) => {
                      const updatedNodes = nodes.map(node =>
                        node.id === selectedNode.id ? { ...node, description: e.target.value } : node
                      );
                      setNodes(updatedNodes);
                      setSelectedNode({ ...selectedNode, description: e.target.value });
                    }}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                </div>

                {selectedNode.config && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Configuration</label>
                    <div className="space-y-3">
                      {Object.entries(selectedNode.config).map(([key, value]) => (
                        <div key={key}>
                          <label className="block text-xs font-medium text-gray-600 mb-1 capitalize">
                            {key.replace('_', ' ')}
                          </label>
                          <input
                            type="text"
                            value={String(value)}
                            onChange={(e) => {
                              const updatedConfig = { ...selectedNode.config, [key]: e.target.value };
                              const updatedNodes = nodes.map(node =>
                                node.id === selectedNode.id ? { ...node, config: updatedConfig } : node
                              );
                              setNodes(updatedNodes);
                              setSelectedNode({ ...selectedNode, config: updatedConfig });
                            }}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-200">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      setNodes(nodes.filter(node => node.id !== selectedNode.id));
                      setConnections(connections.filter(conn => 
                        conn.from !== selectedNode.id && conn.to !== selectedNode.id
                      ));
                      setSelectedNode(null);
                    }}
                    className="w-full"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Node
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Layers className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Select a node to edit its properties</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Toolbar */}
      <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 z-20">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">Workflow Builder</h1>
            <Badge variant="secondary">Draft</Badge>
          </div>

          <div className="flex items-center space-x-3">
            {/* View Controls */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNodePanel(!showNodePanel)}
                className={showNodePanel ? 'bg-purple-100 text-purple-700' : ''}
              >
                <Plus className="w-4 h-4 mr-1" />
                Nodes
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowProperties(!showProperties)}
                className={showProperties ? 'bg-purple-100 text-purple-700' : ''}
              >
                <Settings className="w-4 h-4 mr-1" />
                Properties
              </Button>
            </div>

            <div className="h-6 w-px bg-gray-300"></div>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
              >
                <Minimize2 className="w-4 h-4" />
              </Button>
              <span className="text-sm text-gray-600 px-2">{Math.round(zoom * 100)}%</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setZoom(Math.min(2, zoom + 0.1))}
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>

            <div className="h-6 w-px bg-gray-300"></div>

            {/* Action Buttons */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
              className={isPlaying ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'}
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
              {isPlaying ? 'Stop' : 'Test'}
            </Button>

            <Button variant="ghost" size="sm">
              <Save className="w-4 h-4 mr-1" />
              Save
            </Button>

            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Share2 className="w-4 h-4 mr-1" />
              Publish
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32">
        {/* Node Panel */}
        <NodePanel />

        {/* Properties Panel */}
        <PropertiesPanel />

        {/* Canvas */}
        <div 
          ref={canvasRef}
          className={`relative overflow-hidden bg-gray-50 min-h-screen transition-all ${
            showNodePanel ? 'ml-80' : 'ml-0'
          } ${showProperties ? 'mr-80' : 'mr-0'}`}
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0),
              radial-gradient(circle at 20px 20px, rgba(0,0,0,0.05) 1px, transparent 0)
            `,
            backgroundSize: '20px 20px, 40px 40px'
          }}
        >
          {/* SVG for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
                fill="#8b5cf6"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            {connections.map((connection, index) => (
              <ConnectionLine
                key={index}
                from={connection.from}
                to={connection.to}
                condition={connection.condition}
              />
            ))}
          </svg>

          {/* Workflow Nodes */}
          <div className="relative">
            {nodes.map((node) => (
              <WorkflowNode
                key={node.id}
                node={node}
                isSelected={selectedNode?.id === node.id}
                onSelect={setSelectedNode}
                onDrag={(e, node) => {
                  // Handle node dragging logic
                  setIsDragging(true);
                  setDraggedNode(node);
                }}
                onStartConnection={(node) => {
                  // Handle connection creation
                  console.log('Start connection from:', node.id);
                }}
              />
            ))}
          </div>

          {/* Empty State */}
          {nodes.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center max-w-md">
                <Workflow className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Start Building Your Workflow</h3>
                <p className="text-gray-500 mb-6">
                  Drag nodes from the left panel to create your automation workflow
                </p>
                <Button onClick={() => setShowNodePanel(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Node
                </Button>
              </div>
            </motion.div>
          )}

          {/* Mini-map */}
          <div className="fixed bottom-6 right-6 w-48 h-32 bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
            <div className="bg-gray-100 px-3 py-2 border-b border-gray-200">
              <span className="text-xs font-medium text-gray-600">Workflow Overview</span>
            </div>
            <div className="relative h-24 bg-gray-50">
              {/* Mini nodes */}
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className="absolute w-2 h-2 bg-purple-500 rounded-sm"
                  style={{
                    left: (node.x / 1500) * 180 + 4,
                    top: (node.y / 800) * 80 + 4
                  }}
                />
              ))}
            </div>
          </div>

          {/* Workflow Stats */}
          {nodes.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-6 left-6 bg-white rounded-lg border border-gray-200 shadow-lg p-4"
            >
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Triggers: {nodes.filter(n => n.type === 'trigger').length}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Actions: {nodes.filter(n => n.type === 'action').length}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Logic: {nodes.filter(n => n.type === 'logic').length}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}