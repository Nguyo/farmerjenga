/* JengaFarmer — FarmIQ Platform
   app.js — UI logic for persona switching, OTP, and interactions
*/

'use strict';

/* ── Persona Switcher ───────────────────────────────────── */
const PERSONAS = ['farmer', 'consumer', 'rider', 'aidoctor', 'delivery'];

function switchPersona(persona) {
  if (!PERSONAS.includes(persona)) return;

  // Hide all screens
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.persona-btn').forEach(b => b.classList.remove('active'));

  // Show selected screen
  const screen = document.getElementById('screen-' + persona);
  const btnIndex = PERSONAS.indexOf(persona);
  const btn = document.querySelectorAll('.persona-btn')[btnIndex];

  if (screen) screen.classList.add('active');
  if (btn) btn.classList.add('active');

  // Reset delivery screen when switching to it
  if (persona === 'delivery') resetDelivery();

  // Scroll to top
  const scrollArea = screen && screen.querySelector('.scroll-area');
  if (scrollArea) scrollArea.scrollTop = 0;
}

/* ── OTP Entry ──────────────────────────────────────────── */
function moveOtp(el, nextId) {
  if (el.value.length === 1 && nextId) {
    const next = document.getElementById(nextId);
    if (next) next.focus();
  }
}

function checkOtp() {
  const digits = ['o1', 'o2', 'o3', 'o4'].map(id => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  });
  // Auto-confirm if all 4 digits filled
  if (digits.every(d => d.length === 1)) {
    setTimeout(confirmDelivery, 300);
  }
}

function confirmDelivery() {
  const otpSection = document.getElementById('otp-section');
  const successSection = document.getElementById('success-section');
  if (otpSection) otpSection.style.display = 'none';
  if (successSection) successSection.classList.add('show');
}

function resetDelivery() {
  const otpSection = document.getElementById('otp-section');
  const successSection = document.getElementById('success-section');
  if (otpSection) otpSection.style.display = '';
  if (successSection) successSection.classList.remove('show');
  ['o1', 'o2', 'o3', 'o4'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

/* ── Category Filter (Consumer) ─────────────────────────── */
document.querySelectorAll('.cat-chip').forEach(chip => {
  chip.addEventListener('click', function () {
    const siblings = this.closest('.cat-filter').querySelectorAll('.cat-chip');
    siblings.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
  });
});

/* ── Job Card Buttons ────────────────────────────────────── */
document.querySelectorAll('.btn-reject').forEach(btn => {
  btn.addEventListener('click', function () {
    const card = this.closest('.job-card');
    if (card) {
      card.style.transition = 'opacity 0.3s, transform 0.3s';
      card.style.opacity = '0';
      card.style.transform = 'translateX(40px)';
      setTimeout(() => card.remove(), 300);
    }
  });
});

/* ── Make expose functions global ───────────────────────── */
window.switchPersona = switchPersona;
window.moveOtp = moveOtp;
window.checkOtp = checkOtp;
window.confirmDelivery = confirmDelivery;
