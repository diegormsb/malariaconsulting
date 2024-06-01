function showModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function addConsultation() {
    const patientName = document.getElementById('patientName').value;
    if (patientName.trim() === '') {
        alert('Por favor, ingrese el nombre del paciente');
        return;
    }

    const consultationsDiv = document.getElementById('consultations');
    const newConsultation = document.createElement('div');
    newConsultation.className = 'consultation-item';
    newConsultation.textContent = patientName;
    consultationsDiv.appendChild(newConsultation);

    document.getElementById('patientName').value = '';
    closeModal();
}
