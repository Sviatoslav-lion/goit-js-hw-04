const profile = {
    username: "Jacob",
    playTime: 300,

    changeUsername(newName) {
        this.username = newName;     // змінюємо ім'я користувача
    },
    updatePlayTime(hours) {
        let temp = this.playTime;       // оголошуємо тимчасову змінну для зберігання наявноі кількості часу гравця
        this.playTime = temp + hours;   // додаємо час до наявної кількості годин
    },
    getInfo() {
        let amount = profile.playTime;  // оголошуємо змінну для зберігання кількості годин гравця та записуємо до неї значення
        return  `${this.username} has ${amount} active hours!`; // повертаєм рядок з підстановкою імені гравця та годин гри
    },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"