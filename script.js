const joinNowButton = document.getElementById('join-now');
const addMemberForm = document.getElementById('add-member-form');
const memberList = document.getElementById('member-list');
const memberNameInput = document.getElementById('member-name');

// Show alert on 'Join Now' button click
joinNowButton.addEventListener('click', () => {
    alert('Thank you for joining us! Visit the members section to add yourself.');
});

// Add new member to the list
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const memberName = memberNameInput.value.trim();
    if (memberName) {
        const listItem = document.createElement('li');
        listItem.textContent = memberName;
        memberList.appendChild(listItem);
        memberNameInput.value = '';
    }
});