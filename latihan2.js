const user = {
    name: 'ade', // <-- Add comma here
    sayHi: function() {
        console.log(`Halo, nama saya ${this.name}`); 
        // 'this' refers to 'user'
        // this anonymous function has its own 'this'
        setTimeout(function() { 
            console.log(`Halo, nama saya ${this.name}`);
            // Here, 'this' does not refer to 'user'
            // In browsers, 'this' refers to 'window'
            console.log(`Setelah 1 detik, nama saya ${this.name}`);
        }, 1000);
    }
};    
user.sayHi();
// Output:
// Halo, nama saya ade
// Setelah 1 detik, nama saya undefined
