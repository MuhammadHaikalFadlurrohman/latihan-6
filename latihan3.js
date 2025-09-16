const user = {
    name: 'ade', // <-- Add comma here
    sayHi: function() {
        console.log(`Halo, nama saya ${this.name}`);
        // arrow function ini mewarisi 'this' dari 'sayHi'
        setTimeout(() => {
            // Disini ,'this' merujuk ke objek 'user'
            console.log(`Setelah 1 detik, nama saya ${this.name}`);
        }, 1000);
    }
};
user.sayHi();
// Output:
// Halo, nama saya ade
// Setelah 1 detik, nama saya ade

