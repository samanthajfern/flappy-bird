var mainState = {
    preload: function() {
      game.load.image('bird', 'assets/bird.png');
    },

    create: function() {

        game.stage.backgroundColor = '#f6546a';

        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.bird = game.add.sprite(100, 245, 'bird');
        // Add physics to the bird
        // Needed for: movements, gravity, collisions, etc.
        game.physics.arcade.enable(this.bird);

        this.bird.body.gravity.y = 1000;

        // Call the 'jump' function when the spacekey is hit
        var spaceKey = game.input.keyboard.addKey(
                    Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.jump, this);

    },

    update: function() {
        // It contains the game's logic

        // If the bird is out of the screen (too high or too low)
        // Call the 'restartGame' function
        if (this.bird.y < 0 || this.bird.y > 490)
        this.restartGame();
    },

    jump: function() {
        // Add a vertical velocity to the bird
        this.bird.body.velocity.y = -350;
    },

    // Restart the game
    restartGame: function() {
        // Start the 'main' state, which restarts the game
        game.state.start('main');
    },

};

// Initialize Phaser, and create a 400px by 490px game
var game = new Phaser.Game(400, 490);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start the state to actually start the game
game.state.start('main');
