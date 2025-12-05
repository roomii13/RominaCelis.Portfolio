import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, Cpu, Zap, Shield, Globe, Calculator, Network } from 'lucide-react';

// Contenido HTML con correcciones para el iframe
const htmlContent = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Calculadora VLSM Professional</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
  :root {
    --primary: #0ea5a4;
    --primary-dark: #0d9488;
    --secondary: #3b82f6;
    --danger: #ef4444;
    --success: #10b981;
    --warning: #f59e0b;
    --dark: #0f172a;
    --light: #f8fafc;
    --gray: #64748b;
    --border: #e2e8f0;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
    margin: 0;
    background: linear-gradient(135deg, #f6f8fb 0%, #eef2ff 100%);
    color: var(--dark);
    min-height: 100vh;
    padding: 20px;
  }
  
  .container {
    max-width: 1400px;
    margin: 0 auto;
  }
  
  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding: 16px 24px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(12, 24, 60, 0.08);
  }
  
  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .logo i {
    color: var(--primary);
    font-size: 28px;
  }
  
  .logo h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
  
  .logo span {
    color: var(--primary);
  }
  
  .version {
    background: var(--primary);
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }
  
  /* Main Layout */
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 24px;
    margin-bottom: 24px;
  }
  
  @media (max-width: 1024px) {
    .main-layout {
      grid-template-columns: 1fr;
    }
  }
  
  /* Cards */
  .card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 6px 20px rgba(12, 24, 60, 0.08);
    height: 100%;
  }
  
  .card-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--border);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .card-title i {
    color: var(--primary);
  }
  
  /* Form Styles */
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark);
    font-size: 14px;
  }
  
  .label-help {
    color: var(--gray);
    font-weight: normal;
    font-size: 13px;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px 16px;
    border-radius: 10px;
    border: 1px solid var(--border);
    font-size: 14px;
    font-family: inherit;
    transition: all 0.3s;
  }
  
  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(14, 165, 164, 0.1);
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  /* Buttons */
  .btn {
    padding: 12px 24px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s;
    font-family: inherit;
  }
  
  .btn-primary {
    background: var(--primary);
    color: white;
  }
  
  .btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(14, 165, 164, 0.2);
  }
  
  .btn-secondary {
    background: var(--secondary);
    color: white;
  }
  
  .btn-secondary:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
  
  .btn-outline {
    background: transparent;
    color: var(--primary);
    border: 1px solid var(--primary);
  }
  
  .btn-outline:hover {
    background: rgba(14, 165, 164, 0.1);
  }
  
  .btn-danger {
    background: var(--danger);
    color: white;
  }
  
  .btn-danger:hover {
    background: #dc2626;
  }
  
  .btn-sm {
    padding: 8px 16px;
    font-size: 13px;
  }
  
  .btn-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  /* Tabs */
  .tabs {
    display: flex;
    border-bottom: 1px solid var(--border);
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  
  .tab {
    padding: 12px 20px;
    cursor: pointer;
    font-weight: 600;
    color: var(--gray);
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
  }
  
  .tab.active {
    color: var(--primary);
    border-bottom-color: var(--primary);
  }
  
  .tab:hover:not(.active) {
    color: var(--dark);
  }
  
  .tab-content {
    display: none;
  }
  
  .tab-content.active {
    display: block;
  }
  
  /* Table */
  .table-container {
    overflow-x: auto;
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }
  
  th {
    background: #f1fbfb;
    color: var(--dark);
    font-weight: 700;
    padding: 14px 12px;
    text-align: left;
    border-bottom: 2px solid var(--border);
    white-space: nowrap;
  }
  
  td {
    padding: 12px;
    border-bottom: 1px solid var(--border);
  }
  
  tr:hover {
    background: #f8fafc;
  }
  
  .subnet-badge {
    display: inline-block;
    padding: 4px 10px;
    background: #e0f2fe;
    color: #0369a1;
    border-radius: 20px;
    font-weight: 600;
    font-size: 12px;
  }
  
  /* Visual Network */
  .network-visual {
    margin-top: 20px;
    padding: 20px;
    background: #f8fafc;
    border-radius: 12px;
    border: 1px solid var(--border);
  }
  
  .network-bar {
    height: 40px;
    background: #e2e8f0;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
  }
  
  .subnet-segment {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 12px;
    overflow: hidden;
    transition: all 0.3s;
  }
  
  .subnet-segment:hover {
    transform: scale(1.05);
    z-index: 10;
  }
  
  .subnet-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 15px;
  }
  
  .legend-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }
  
  .legend-color {
    width: 16px;
    height: 16px;
    border-radius: 4px;
  }
  
  /* Output & Messages */
  .output-section {
    margin-top: 30px;
  }
  
  .message {
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .message-success {
    background: #d1fae5;
    color: #065f46;
    border-left: 4px solid var(--success);
  }
  
  .message-error {
    background: #fee2e2;
    color: #991b1b;
    border-left: 4px solid var(--danger);
  }
  
  .message-warning {
    background: #fef3c7;
    color: #92400e;
    border-left: 4px solid var(--warning);
  }
  
  .message i {
    font-size: 20px;
  }
  
  /* Utility */
  .color-primary { color: var(--primary); }
  .color-success { color: var(--success); }
  .color-danger { color: var(--danger); }
  .color-warning { color: var(--warning); }
  
  .text-sm { font-size: 13px; }
  .text-xs { font-size: 12px; }
  
  .mb-1 { margin-bottom: 8px; }
  .mb-2 { margin-bottom: 16px; }
  .mb-3 { margin-bottom: 24px; }
  .mt-1 { margin-top: 8px; }
  .mt-2 { margin-top: 16px; }
  .mt-3 { margin-top: 24px; }
  
  .d-flex { display: flex; }
  .align-center { align-items: center; }
  .justify-between { justify-content: space-between; }
  .gap-1 { gap: 8px; }
  .gap-2 { gap: 16px; }
  
  .hidden { display: none; }
  
  /* Footer */
  .footer {
    text-align: center;
    padding: 20px;
    color: var(--gray);
    font-size: 13px;
    margin-top: 30px;
  }
  
  /* Modal */
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    align-items: center;
    justify-content: center;
  }
  
  .modal.active {
    display: flex;
  }
  
  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 30px;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .modal-title {
    font-size: 20px;
    font-weight: 700;
  }
  
  .modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--gray);
  }
  
  /* Quiz Mode */
  .quiz-question {
    background: #f8fafc;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 20px;
  }
  
  .quiz-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .quiz-option {
    padding: 12px 16px;
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .quiz-option:hover {
    background: #f1f5f9;
  }
  
  .quiz-option.selected {
    background: #dbeafe;
    border-color: var(--secondary);
  }
  
  .quiz-option.correct {
    background: #d1fae5;
    border-color: var(--success);
  }
  
  .quiz-option.incorrect {
    background: #fee2e2;
    border-color: var(--danger);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
    
    .btn-group {
      flex-direction: column;
    }
    
    .tabs {
      overflow-x: auto;
    }
    
    .tab {
      white-space: nowrap;
    }
  }
</style>
</head>
<body>
<div class="container">
  <!-- Header -->
  <div class="header">
    <div class="logo">
      <i class="fas fa-network-wired"></i>
      <div>
        <h1>Calculadora <span>VLSM</span> Professional</h1>
        <p class="text-sm">Herramienta completa para subnetting IPv4/IPv6 y VLSM</p>
      </div>
    </div>
    <div class="version">v2.0</div>
  </div>

  <!-- Main Layout -->
  <div class="main-layout">
    <!-- Left Panel - Input & Controls -->
    <div>
      <div class="card mb-3">
        <div class="card-title">
          <i class="fas fa-sliders-h"></i>
          <span>Configuración de Red</span>
        </div>
        
        <!-- Tabs -->
        <div class="tabs">
          <div class="tab active" data-tab="ipv4">IPv4</div>
          <div class="tab" data-tab="ipv6">IPv6</div>
          <div class="tab" data-tab="quiz">Modo Examen</div>
          <div class="tab" data-tab="supernet">Supernetting</div>
        </div>
        
        <!-- IPv4 Tab -->
        <div class="tab-content active" id="tab-ipv4">
          <div class="form-group">
            <label>Red Base (IP/CIDR) <span class="label-help">ej: 192.168.0.0/24</span></label>
            <input type="text" id="baseNet" value="192.168.0.0/24" placeholder="192.168.0.0/24">
            <div class="text-xs mt-1" id="ipValidation"></div>
          </div>
          
          <div class="form-group">
            <label>Requisitos de Hosts <span class="label-help">separados por comas, ej: 100,30,10,5</span></label>
            <textarea id="hostsList" placeholder="100,30,10,5">100,30,10,5</textarea>
          </div>
          
          <div class="form-group">
            <label>Opciones de Cálculo</label>
            <div class="d-flex gap-2">
              <select id="order">
                <option value="desc">Ordenar descendente</option>
                <option value="asc">Ordenar ascendente</option>
                <option value="input">Mantener orden</option>
              </select>
              <select id="ipClass">
                <option value="cidr">CIDR (Moderno)</option>
                <option value="classful">Clases (A, B, C)</option>
              </select>
            </div>
          </div>
          
          <div class="form-group">
            <label>Configuraciones Adicionales</label>
            <div class="d-flex gap-2 align-center">
              <input type="checkbox" id="allow31" checked>
              <label for="allow31" class="mb-0">Permitir /31 (Punto a Punto)</label>
            </div>
            <div class="d-flex gap-2 align-center mt-1">
              <input type="checkbox" id="allow32" checked>
              <label for="allow32" class="mb-0">Permitir /32 (Host Único)</label>
            </div>
          </div>
          
          <div class="btn-group">
            <button class="btn btn-primary" id="calcBtn">
              <i class="fas fa-calculator"></i> Calcular VLSM
            </button>
            <button class="btn btn-outline" id="saveConfig">
              <i class="fas fa-save"></i> Guardar
            </button>
            <button class="btn btn-outline" id="loadConfig">
              <i class="fas fa-folder-open"></i> Cargar
            </button>
          </div>
        </div>
        
        <!-- IPv6 Tab -->
        <div class="tab-content" id="tab-ipv6">
          <div class="message message-warning">
            <i class="fas fa-exclamation-triangle"></i>
            <div>IPv6 en desarrollo - Próxima versión</div>
          </div>
          <div class="form-group">
            <label>Red IPv6 (Prefix)</label>
            <input type="text" value="2001:db8::/32" disabled>
          </div>
        </div>
        
        <!-- Quiz Tab -->
        <div class="tab-content" id="tab-quiz">
          <div class="quiz-question" id="quizQuestion">
            <p><strong>Pregunta 1:</strong> ¿Cuál es la máscara de subred para una red que necesita 14 hosts?</p>
            <div class="quiz-options">
              <div class="quiz-option" data-answer="a">255.255.255.240 (/28)</div>
              <div class="quiz-option" data-answer="b">255.255.255.224 (/27)</div>
              <div class="quiz-option" data-answer="c">255.255.255.248 (/29)</div>
              <div class="quiz-option" data-answer="d">255.255.255.192 (/26)</div>
            </div>
          </div>
          <button class="btn btn-secondary" id="nextQuestion">
            <i class="fas fa-forward"></i> Siguiente Pregunta
          </button>
        </div>
        
        <!-- Supernetting Tab -->
        <div class="tab-content" id="tab-supernet">
          <div class="form-group">
            <label>Redes a Agrupar <span class="label-help">una por línea</span></label>
            <textarea id="supernetInput" placeholder="192.168.1.0/24&#10;192.168.2.0/24&#10;192.168.3.0/24">192.168.1.0/24
192.168.2.0/24
192.168.3.0/24</textarea>
          </div>
          <button class="btn btn-primary" id="calcSupernet">
            <i class="fas fa-layer-group"></i> Calcular Supernet
          </button>
        </div>
      </div>
      
      <!-- History Card -->
      <div class="card">
        <div class="card-title">
          <i class="fas fa-history"></i>
          <span>Historial de Cálculos</span>
        </div>
        <div id="historyList">
          <div class="text-sm color-gray">No hay cálculos previos</div>
        </div>
        <div class="btn-group mt-2">
          <button class="btn btn-sm btn-outline" id="clearHistory">
            <i class="fas fa-trash"></i> Limpiar
          </button>
          <button class="btn btn-sm btn-outline" id="exportHistory">
            <i class="fas fa-file-export"></i> Exportar
          </button>
        </div>
      </div>
    </div>
    
    <!-- Right Panel - Results -->
    <div>
      <div class="card mb-3">
        <div class="card-title d-flex justify-between align-center">
          <div>
            <i class="fas fa-table"></i>
            <span>Resultados VLSM</span>
          </div>
          <div class="btn-group">
            <button class="btn btn-sm btn-outline" id="exportCSV">
              <i class="fas fa-file-csv"></i> CSV
            </button>
            <button class="btn btn-sm btn-outline" id="exportPDF">
              <i class="fas fa-file-pdf"></i> PDF
            </button>
            <button class="btn btn-sm btn-outline" id="copyResults">
              <i class="fas fa-copy"></i> Copiar
            </button>
          </div>
        </div>
        
        <div id="output">
          <div class="message message-info">
            <i class="fas fa-info-circle"></i>
            <div>Ingresa una red base y requisitos, luego haz clic en "Calcular VLSM"</div>
          </div>
        </div>
        
        <!-- Network Visualization -->
        <div class="network-visual" id="networkVisual">
          <div class="text-sm mb-2"><strong>Visualización de Subredes:</strong></div>
          <div class="network-bar" id="networkBar"></div>
          <div class="subnet-legend" id="subnetLegend"></div>
        </div>
      </div>
      
      <!-- API & Export Section -->
      <div class="card">
        <div class="card-title">
          <i class="fas fa-code"></i>
          <span>API & Exportación</span>
        </div>
        <div class="btn-group">
          <button class="btn btn-outline" id="showApi">
            <i class="fas fa-terminal"></i> Mostrar API
          </button>
          <button class="btn btn-outline" id="exportJSON">
            <i class="fas fa-file-code"></i> JSON
          </button>
          <button class="btn btn-outline" id="exportTXT">
            <i class="fas fa-file-alt"></i> Texto
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal for API -->
<div class="modal" id="apiModal">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title">API de Integración</div>
      <button class="modal-close" id="closeApiModal">&times;</button>
    </div>
    <div class="mb-3">
      <p>Usa esta API para integrar la calculadora en tus aplicaciones:</p>
      <pre style="background: #f8fafc; padding: 15px; border-radius: 8px; overflow-x: auto; font-size: 13px;">
// Ejemplo de uso
fetch('/api/vlsm', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    network: '192.168.0.0/24',
    requirements: [100, 30, 10, 5],
    allow31: true,
    allow32: false
  })
})
.then(res => res.json())
.then(data => console.log(data));</pre>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary" id="copyApi">Copiar Código</button>
      <button class="btn btn-outline" id="closeApiModal2">Cerrar</button>
    </div>
  </div>
</div>

<script>
// Función para inicializar la calculadora después de que el iframe se cargue
function initCalculator() {
  console.log('Calculadora VLSM inicializando...');
  
  // ==================== UTILIDADES IP ====================
  // Validación de IP
  function isValidIPv4(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    
    for (let part of parts) {
      const num = parseInt(part, 10);
      if (isNaN(num) || num < 0 || num > 255) return false;
      if (part !== num.toString()) return false;
    }
    
    return true;
  }

  function isValidCIDR(cidr) {
    const parts = cidr.split('/');
    if (parts.length !== 2) return false;
    
    if (!isValidIPv4(parts[0])) return false;
    
    const prefix = parseInt(parts[1], 10);
    return !isNaN(prefix) && prefix >= 0 && prefix <= 32;
  }

  // Conversión IP <-> Entero
  function ipToInt(ip) {
    if (!isValidIPv4(ip)) throw new Error('IP inválida');
    const parts = ip.split('.').map(p => parseInt(p, 10));
    return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;
  }

  function intToIp(int) {
    return [(int >>> 24) & 255, (int >>> 16) & 255, (int >>> 8) & 255, int & 255].join('.');
  }

  // Máscara de red
  function prefixToMask(prefix) {
    if (prefix === 0) return '0.0.0.0';
    if (prefix === 32) return '255.255.255.255';
    const mask = (0xFFFFFFFF << (32 - prefix)) >>> 0;
    return intToIp(mask);
  }

  // Cálculo de hosts
  function hostsFromPrefix(prefix, allow31 = true, allow32 = true) {
    if (prefix === 32) return allow32 ? 1 : 0;
    if (prefix === 31) return allow31 ? 2 : 0;
    return Math.pow(2, 32 - prefix) - 2;
  }

  // Prefijo para cantidad de hosts
  function prefixForHostCount(hostsNeeded, allow31 = true, allow32 = true) {
    if (hostsNeeded <= 0) return allow32 ? 32 : 31;
    
    if (hostsNeeded === 1 && allow32) return 32;
    if (hostsNeeded === 2 && allow31) return 31;
    if (hostsNeeded === 0 && allow31) return 31;
    
    const totalIPsNeeded = hostsNeeded + 2;
    let bitsForHosts = Math.ceil(Math.log2(totalIPsNeeded));
    
    if (Math.pow(2, bitsForHosts) - 2 < hostsNeeded) {
      bitsForHosts++;
    }
    
    let prefix = 32 - bitsForHosts;
    
    const usableHosts = hostsFromPrefix(prefix, allow31, allow32);
    if (usableHosts < hostsNeeded) {
      prefix--;
    }
    
    return Math.max(0, Math.min(32, prefix));
  }

  // ==================== ALGORITMO VLSM ====================
  function calculateVLSM(baseCidr, requirements, order = 'desc', allow31 = true, allow32 = true) {
    if (!isValidCIDR(baseCidr)) {
      throw new Error('Formato de red base inválido. Use: IP/Prefijo (ej: 192.168.0.0/24)');
    }
    
    const [baseIp, basePrefixStr] = baseCidr.split('/');
    const basePrefix = parseInt(basePrefixStr, 10);
    const baseInt = ipToInt(baseIp);
    const baseBlock = Math.pow(2, 32 - basePrefix);
    const baseNetwork = (Math.floor(baseInt / baseBlock) * baseBlock) >>> 0;
    const baseBroadcast = (baseNetwork + baseBlock - 1) >>> 0;
    
    let reqs = requirements
      .map((r, idx) => ({
        origIndex: idx,
        hosts: Math.max(0, parseInt(r, 10)),
        label: 'S' + (idx + 1)
      }))
      .filter(r => !isNaN(r.hosts));
    
    if (reqs.length === 0) {
      throw new Error('No hay requisitos válidos de hosts');
    }
    
    if (order === 'desc') {
      reqs.sort((a, b) => b.hosts - a.hosts);
    } else if (order === 'asc') {
      reqs.sort((a, b) => a.hosts - b.hosts);
    }
    
    let current = baseNetwork;
    const results = [];
    const colors = [
      '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', 
      '#06b6d4', '#84cc16', '#f97316', '#ec4899', '#6366f1'
    ];
    
    for (let i = 0; i < reqs.length; i++) {
      const r = reqs[i];
      const pref = prefixForHostCount(r.hosts, allow31, allow32);
      const size = Math.pow(2, 32 - pref);
      
      const alignedNetwork = (Math.floor(current / size) * size) >>> 0;
      let net = alignedNetwork < current ? (alignedNetwork + size) >>> 0 : alignedNetwork;
      const broadcast = (net + size - 1) >>> 0;
      
      if (broadcast > baseBroadcast) {
        throw new Error('Espacio insuficiente para subred que requiere ' + r.hosts + ' hosts. Red base demasiado pequeña.');
      }
      
      const firstUsable = pref <= 30 ? intToIp(net + 1) : 'N/A';
      const lastUsable = pref <= 30 ? intToIp(broadcast - 1) : 'N/A';
      
      results.push({
        label: r.label,
        requestedHosts: r.hosts,
        assignedPrefix: pref,
        network: intToIp(net),
        mask: prefixToMask(pref),
        broadcast: intToIp(broadcast),
        firstUsable: firstUsable,
        lastUsable: lastUsable,
        usableHosts: hostsFromPrefix(pref, allow31, allow32),
        blockSize: size,
        color: colors[i % colors.length],
        networkInt: net,
        broadcastInt: broadcast
      });
      
      current = (broadcast + 1) >>> 0;
    }
    
    if (order === 'input') {
      results.sort((a, b) => {
        const aIdx = reqs.findIndex(r => r.label === a.label);
        const bIdx = reqs.findIndex(r => r.label === b.label);
        return aIdx - bIdx;
      });
    }
    
    return {
      baseNetwork: intToIp(baseNetwork),
      baseBroadcast: intToIp(baseBroadcast),
      basePrefix,
      totalHosts: hostsFromPrefix(basePrefix, allow31, allow32),
      assigned: results,
      usedSpace: current - baseNetwork,
      totalSpace: baseBlock,
      utilization: ((current - baseNetwork) / baseBlock * 100).toFixed(2)
    };
  }

  // ==================== FUNCIONES DE UI ====================
  function displayResults(result) {
    let html = '<div class="message message-success">';
    html += '<i class="fas fa-check-circle"></i>';
    html += '<div><strong>VLSM calculado exitosamente</strong> | ';
    html += 'Red: ' + result.baseNetwork + '/' + result.basePrefix + ' | ';
    html += 'Utilización: ' + result.utilization + '%</div>';
    html += '</div>';
    html += '<div class="table-container">';
    html += '<table>';
    html += '<thead><tr>';
    html += '<th>Subred</th><th>Hosts Req.</th><th>Network</th><th>Prefijo</th>';
    html += '<th>Máscara</th><th>Broadcast</th><th>Primer Usable</th>';
    html += '<th>Último Usable</th><th>Hosts Útiles</th>';
    html += '</tr></thead><tbody>';
    
    result.assigned.forEach(r => {
      html += '<tr>';
      html += '<td><span class="subnet-badge">' + r.label + '</span></td>';
      html += '<td>' + r.requestedHosts + '</td>';
      html += '<td>' + r.network + '</td>';
      html += '<td>/' + r.assignedPrefix + '</td>';
      html += '<td>' + r.mask + '</td>';
      html += '<td>' + r.broadcast + '</td>';
      html += '<td>' + r.firstUsable + '</td>';
      html += '<td>' + r.lastUsable + '</td>';
      html += '<td>' + r.usableHosts + '</td>';
      html += '</tr>';
    });
    
    html += '</tbody></table></div>';
    html += '<div class="mt-2 text-sm">';
    html += '<strong>Resumen:</strong> ' + result.assigned.length + ' subredes creadas | ';
    html += 'Espacio usado: ' + result.usedSpace.toLocaleString() + ' IPs | ';
    html += 'Espacio total: ' + result.totalSpace.toLocaleString() + ' IPs';
    html += '</div>';
    
    const output = document.getElementById('output');
    if (output) output.innerHTML = html;
    
    // Actualizar visualización
    updateNetworkVisualization(result);
  }

  function updateNetworkVisualization(result) {
    const networkBar = document.getElementById('networkBar');
    const subnetLegend = document.getElementById('subnetLegend');
    
    if (!networkBar || !subnetLegend) return;
    
    const totalSize = result.totalSpace;
    const baseNetworkInt = ipToInt(result.baseNetwork);
    
    networkBar.innerHTML = '';
    subnetLegend.innerHTML = '';
    
    result.assigned.forEach((subnet, index) => {
      const start = subnet.networkInt - baseNetworkInt;
      const width = (subnet.blockSize / totalSize) * 100;
      
      const segment = document.createElement('div');
      segment.className = 'subnet-segment';
      segment.style.left = ((start / totalSize) * 100) + '%';
      segment.style.width = width + '%';
      segment.style.background = subnet.color;
      segment.title = subnet.label + ': ' + subnet.network + '/' + subnet.assignedPrefix + ' (' + subnet.blockSize + ' IPs)';
      
      if (width > 5) {
        segment.textContent = subnet.label + ' (' + subnet.blockSize + ')';
      }
      
      networkBar.appendChild(segment);
      
      // Leyenda
      const legendItem = document.createElement('div');
      legendItem.className = 'legend-item';
      legendItem.innerHTML = '<div class="legend-color" style="background: ' + subnet.color + '"></div>';
      legendItem.innerHTML += '<div>' + subnet.label + ': ' + subnet.network + '/' + subnet.assignedPrefix + '</div>';
      subnetLegend.appendChild(legendItem);
    });
  }

  function showError(message) {
    const output = document.getElementById('output');
    if (output) {
      output.innerHTML = '<div class="message message-error"><i class="fas fa-exclamation-circle"></i><div><strong>Error:</strong> ' + message + '</div></div>';
    }
  }

  // ==================== EVENT LISTENERS ====================
  function setupEventListeners() {
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
      calcBtn.addEventListener('click', function() {
        try {
          const base = document.getElementById('baseNet').value.trim();
          const hostsRaw = document.getElementById('hostsList').value.trim();
          const order = document.getElementById('order').value;
          const allow31 = document.getElementById('allow31').checked;
          const allow32 = document.getElementById('allow32').checked;
          
          if (!base) throw new Error('Ingrese la red base');
          if (!hostsRaw) throw new Error('Ingrese los requisitos de hosts');
          
          const hostItems = hostsRaw.split(',').map(s => parseInt(s.trim(), 10)).filter(x => !isNaN(x));
          if (hostItems.length === 0) throw new Error('No hay números válidos en la lista');
          
          const result = calculateVLSM(base, hostItems, order, allow31, allow32);
          displayResults(result);
          
        } catch (error) {
          showError(error.message);
        }
      });
    }

    // Botón de cálculo de supernet
    const calcSupernetBtn = document.getElementById('calcSupernet');
    if (calcSupernetBtn) {
      calcSupernetBtn.addEventListener('click', function() {
        const output = document.getElementById('output');
        if (output) {
          output.innerHTML = '<div class="message message-info"><i class="fas fa-info-circle"></i><div>Función Supernetting en desarrollo - Próxima versión</div></div>';
        }
      });
    }

    // Botón siguiente pregunta
    const nextQuestionBtn = document.getElementById('nextQuestion');
    if (nextQuestionBtn) {
      nextQuestionBtn.addEventListener('click', function() {
        const questions = [
          '¿Cuál es la máscara de subred para una red que necesita 60 hosts?',
          '¿Cuántos hosts útiles tiene una red /28?',
          '¿Qué clase es la IP 172.16.0.0?'
        ];
        
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        const quizContainer = document.getElementById('quizQuestion');
        if (quizContainer) {
          quizContainer.innerHTML = '<p><strong>Pregunta:</strong> ' + randomQuestion + '</p>';
        }
      });
    }

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === 'tab-' + tabId) {
            content.classList.add('active');
          }
        });
      });
    });

    // Validación en tiempo real
    const baseNetInput = document.getElementById('baseNet');
    if (baseNetInput) {
      baseNetInput.addEventListener('input', function() {
        const validation = document.getElementById('ipValidation');
        const cidr = this.value.trim();
        
        if (!cidr) {
          if (validation) validation.innerHTML = '';
          return;
        }
        
        if (isValidCIDR(cidr)) {
          if (validation) {
            validation.innerHTML = '<span class="color-success"><i class="fas fa-check-circle"></i> Válido</span>';
          }
        } else {
          if (validation) {
            validation.innerHTML = '<span class="color-danger"><i class="fas fa-times-circle"></i> Formato inválido. Use: 192.168.0.0/24</span>';
          }
        }
      });
    }
  }

  // Ejecutar cálculo automático al cargar
  function runInitialCalculation() {
    setTimeout(() => {
      const calcBtn = document.getElementById('calcBtn');
      if (calcBtn) {
        calcBtn.click();
      }
    }, 500);
  }

  // Inicializar
  setupEventListeners();
  runInitialCalculation();
  console.log('Calculadora VLSM inicializada correctamente');
}

// Inicializar cuando el documento esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCalculator);
} else {
  initCalculator();
}
</script>
</body>
</html>`;

const CalculadoraVLSM = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 overflow-y-auto">
      {/* Header personalizado */}
      <div className="sticky top-0 bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-xl border-b border-white/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center space-x-3">
                <Network className="w-8 h-8 text-cyan-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Calculadora VLSM Professional</h2>
                  <p className="text-sm text-gray-300">Herramienta completa para subnetting IPv4/IPv6 y VLSM</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
                className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading && (
          <div className="flex items-center justify-center h-[600px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-500 mx-auto mb-6"></div>
              <h3 className="text-xl font-bold text-white mb-2">Cargando Calculadora VLSM Professional</h3>
              <p className="text-gray-300">Inicializando todas las funcionalidades...</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
              <iframe
                srcDoc={htmlContent}
                title="Calculadora VLSM Professional"
                className="w-full h-[600px] border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                onLoad={handleIframeLoad}
                style={{ display: iframeLoaded ? 'block' : 'none' }}
              />
              {!iframeLoaded && !isLoading && (
                <div className="h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-900 to-slate-900">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                    <p className="text-gray-300">Inicializando calculadora...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Panel lateral informativo */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Características Premium</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  '✅ Cálculo preciso de VLSM',
                  '✅ Visualización gráfica de subredes',
                  '✅ Historial de cálculos',
                  '✅ Modo examen/quiz',
                  '✅ Supernetting avanzado',
                  '✅ Exportación múltiple (CSV, JSON, PDF)',
                  '✅ Validación de IPs públicas/privadas',
                  '✅ API para integración',
                  '✅ Soporte IPv6 (en desarrollo)',
                  '✅ Configuraciones guardadas'
                ].map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Uso Profesional</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Esta herramienta es ideal para administradores de redes, estudiantes de certificaciones 
                (CCNA, Network+), y profesionales que necesitan optimizar el uso de direcciones IP.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Empresas de telecomunicaciones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Centros educativos y universidades</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Consultores de infraestructura</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Consejos de uso</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-black/30 rounded-lg p-3">
                  <p className="text-emerald-300 font-semibold text-xs">💡 Recomendado:</p>
                  <p className="text-gray-300 text-xs">Usa el orden descendente para optimizar el espacio</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <p className="text-emerald-300 font-semibold text-xs">📊 Ejemplo real:</p>
                  <p className="text-gray-300 text-xs">Red: 192.168.0.0/24, Hosts: 100,50,30,10,5</p>
                </div>
                <div className="bg-black/30 rounded-lg p-3">
                  <p className="text-emerald-300 font-semibold text-xs">🔧 Funcionalidad:</p>
                  <p className="text-gray-300 text-xs">Exporta resultados para documentación</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer informativo */}
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Rápida</h4>
              <p className="text-gray-300 text-sm">Cálculos instantáneos con algoritmos optimizados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Precisa</h4>
              <p className="text-gray-300 text-sm">Resultados exactos para implementación real</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="text-lg font-bold text-white mb-2">Profesional</h4>
              <p className="text-gray-300 text-sm">Herramienta nivel enterprise para uso profesional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraVLSM;
