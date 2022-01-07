var tm = new Time_manager();

function Time_manager() {
    this.min = 0;
    this.hour = 6;
    this.milhour = 6;

    this.am = true;

    this.day = true;

    this.days_left = 10;

    this.stringify = function() {
        let output = '';

        if (this.hour >= 6){
            if (this.am == true){
                output += '☀️ ';
                this.day = true;
            }else {
                output += '🌙 ';
                this.day = false;
            }
        }else if (this.hour <= 9){
            if (this.am == false){
                output += '☀️ ';
                this.day = true;
            }else {
                output += '🌙 ';
                this.day = false;
            }
        }
        
        output += this.hour + ':'
        
        if (this.min.toString().length != 2){
            output += '0';
            output += this.min;
        }else{
            output += this.min;
        }
        
        if (this.am == true){
            output += ' AM';
        }else {
            output += ' PM';
        }

        return output;
    }

    this.tick = function() {
        this.min++;
        if (this.min >= 60){
            this.min = 0;
            this.hour++;
            this.milhour++;
            if (this.hour >= 13){
                this.hour = 1;
                this.am = !this.am;
                if (this.am == true){
                    this.milhour = 0;
                    this.days_left -= 1;
                }
            }
        }
    }
}
