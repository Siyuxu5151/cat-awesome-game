let score = 0;
const cat = document.getElementById('cat');
const scoreDisplay = document.querySelector('#score span');
const rewardMessage = document.getElementById('reward-message');

cat.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    
    // 随机动画效果
    const actions = [
        'rotate(10deg)', 
        'rotate(-10deg)', 
        'scale(1.1)', 
        'scale(0.9)'
    ];
    cat.style.transform = actions[Math.floor(Math.random() * actions.length)];
    setTimeout(() => { cat.style.transform = ''; }, 200);

    // 奖励逻辑
    if (score % 10 === 0) {
        const rewards = ['小鱼干', '猫罐头', '毛线球', '猫薄荷'];
        const reward = rewards[Math.floor(Math.random() * rewards.length)];
        rewardMessage.innerHTML = `🎉 奖励：${reward} ×1！`;
        setTimeout(() => { rewardMessage.innerHTML = ''; }, 2000);
    }
});

function resetGame() {
    score = 0;
    scoreDisplay.textContent = score;
    rewardMessage.innerHTML = '';
}
