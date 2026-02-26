// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / 200;
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// Form Validation
const form = document.getElementById('registerForm');
if(form){
form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;
  const message = document.getElementById('formMessage');

  if(name === "" || email === "" || age < 18){
    message.innerHTML = "<span class='text-danger'>Please fill valid details (18+ only).</span>";
  } else {
    message.innerHTML = "<span class='text-success'>Registration Successful!</span>";
    form.reset();
  }
});
}

// Leaderboard Data
const leaderboard = [
  {name:"Aarav", score:980},
  {name:"Riya", score:920},
  {name:"Kabir", score:890},
  {name:"Anaya", score:850},
  {name:"Vikram", score:820}
];

const tableBody = document.getElementById('leaderboardBody');
if(tableBody){
  leaderboard.sort((a,b)=> b.score - a.score);
  leaderboard.forEach((player,index)=>{
    tableBody.innerHTML += `
      <tr>
        <td>${index+1}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
      </tr>`;
  });
}