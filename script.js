const voteBtns = document.querySelectorAll('.vote-btn');
const voteForm = document.getElementById('vote-form');
const candidateIdInput = document.getElementById('candidate-id');

voteBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const candidateId = btn.dataset.candidateId;
    candidateIdInput.value = candidateId;
    voteForm.style.display = 'block';
  });
});

voteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const voterName = document.getElementById('voter-name').value;
  const candidateId = candidateIdInput.value;

  fetch('vote.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `candidate_id=${candidateId}&voter_name=${voterName}`,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Vote cast successfully!');
        voteForm.style.display = 'none';
      } else {
        alert('Error casting vote!');
      }
    })
    .catch((error) => console.error(error));
});
