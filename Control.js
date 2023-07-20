
// Control.js
function moveForward() {
  // كود لتحريك الروبوت للأمام
}

function moveBackward() {
  // كود لتحريك الروبوت للخلف
}

function moveLeft() {
  // كود لتحريك الروبوت لليسار
}

function moveRight() {
  // كود لتحريك الروبوت لليمين
}

function stop() {
  // كود لإيقاف حركة الروبوت
}

function reset() {
  // كود لإعادة ضبط موقع الروبوت
}

// Data.js
function updateStatus(newStatus) {
  const statusElement = document.getElementById('status');
  statusElement.textContent = newStatus;
}

function updateBatteryLevel(newLevel) {
  const batteryElement = document.getElementById('battery');
  batteryElement.textContent = newLevel;
}

// كود لتوصيل صفحة البيانات بالروبوت وتحديث البيانات بشكل دوري

