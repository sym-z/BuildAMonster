class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 350;
        this.bodyY = 300;
        
        this.r_armX = 460;
        this.r_armY = 320;
        
        this.l_armX = 240;
        this.l_armY = 320;
        
        this.eyeX = 350;
        this.eyeY = 265;

        this.smileX = 350;
        this.smileY = 350;
        
        this.fangX = 350;
        this.fangY = 350;

        this.antX = 360;
        this.antY = 200;

        this.r_legX = 410;
        this.r_legY = 450;
        
        this.l_legX = 290;
        this.l_legY = 450;
        
        this.noseX = 350;
        this.noseY = 325;
       
        this.aKey = null;
        this.dKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.r_arm = this.add.sprite(this.r_armX, this.r_armY , "monsterParts", "arm_greenD.png");
        my.sprite.l_arm = this.add.sprite(this.l_armX, this.l_armY , "monsterParts", "arm_greenD.png");
        my.sprite.l_arm.flipX = true;
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY , "monsterParts", "eye_psycho_dark.png");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY , "monsterParts", "mouth_closed_happy.png");
        my.sprite.fang = this.add.sprite(this.fangX, this.fangY , "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;
        my.sprite.ant = this.add.sprite(this.antX, this.antY , "monsterParts", "detail_red_antenna_large.png");
        my.sprite.r_leg = this.add.sprite(this.r_legX, this.r_legY , "monsterParts", "leg_greenD.png");
        my.sprite.l_leg = this.add.sprite(this.l_legX, this.l_legY , "monsterParts", "leg_greenD.png");
        my.sprite.l_leg.flipX = true;
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY , "monsterParts", "nose_red.png");
        
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down', (key, event) =>
        {
            my.sprite.fang.visible = true;
            my.sprite.smile.visible = false;
        }); 
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on('down', (key, event) =>
        {
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;

        }); 

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        /*
        for (const x in my.sprite)
        {
            my.sprite[x].x += 40

        }
        */

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        for(const x in my.sprite)
        {
            if(this.aKey.isDown)
            {
                my.sprite[x].x -= 1;
            }
            else if(this.dKey.isDown)
            {
                my.sprite[x].x += 1;
            }
        }

       
    }

}