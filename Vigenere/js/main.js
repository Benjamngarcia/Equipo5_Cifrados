function LangSelected(){
    var radios = document.getElementsByName('Lang');
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                return Number(radios[i].value)
            }
        }
    }
    
    function AsciiToA1(Char1, ForSpanish){
    Char1 = Char1;
        if (IsEnie(Char1) == true)
            return 15;
        if (IsLower(Char1, ForSpanish))
            Char1 -= 32;
        if(ForSpanish == 1){
            if(Char1-64 < 15){
                return(Char1-64);
            }
            else if(Char1-64 >= 15 && Char1-64 < 28){
                return(Char1-63);
            }
        }
        if(ForSpanish != 1)
                return(Char1-64);
    }
    function IsLetter(c, ForSpanish){
        return IsUpper(c, ForSpanish) || IsLower(c, ForSpanish);
    }
    
    function IsEnie(Char2){
        if(Char2 == 209 || Char2 == 241){
            return true;
        }else{
            return false;
        }
    
    }
    
    function IsUpper(Char3, ForSpanish){
        if (ForSpanish == 1){
             if (IsEnie(Char3)){
                return true;
            }else if(Char3 >= 65 && Char3 <= 90){
                return true;
            }
        }else if (ForSpanish != 1){
        if(Char3 >= 65 && Char3 <= 90)
            return true;
        else
            return false;
        }
    }
    
    function IsLower(Char4,ForSpanish){
        if (ForSpanish == 1){
             if (IsEnie(Char4)){
                return true;
            }else if(Char4 >= 97 && Char4 <= 122){
                return true;
            }
        }else if (ForSpanish != 1){
        if(Char4 >= 97 && Char4 <= 122) 
            return true;
        else
            return false;
        }
    }
    
    function IsA1Char(Char5, ForSpanish){
        if (ForSpanish == 1)
        {
            if (Char5 > 27){
                return false;
            }else{
                return true;
            }
        }else if (Char5 > 26 && ForSpanish != 1){
            return false;
        }else{
            return true;
        }
    }
    
    function Encriptar(ModeEnc,ForSpanish)
    {
        var ForSpanish =  LangSelected();
        var GetPhrase = document.getElementById('InputText').value;
        var GetPass = document.getElementById('PassWord').value;
        var Codes = [];
        var TotalChars;
        if(ForSpanish == 1)
            TotalChars = 27;
        else
            TotalChars = 26;
        if(GetPhrase.length < 1 || GetPass.length < 1)
        {
            alert('La frase/contraseña no puede estar en blanco')
            return;
        }
        var PassData = PhraseToArray(GetPass, ForSpanish);
        var PhraseData = PhraseToArray(GetPhrase, ForSpanish);
        var SpaceCount = 0;
    
        if (ModeEnc == true){
            for(var i = 0; i < PhraseData.length; i++){
                if(IsA1Char(PhraseData[i], ForSpanish) == false){
                    Codes.push(PhraseData[i]);
                    SpaceCount += 1;
                }else if(IsA1Char(PhraseData[i], ForSpanish) == true){
                    Codes.push((PassData[(i - SpaceCount) % PassData.length] + PhraseData[i]) % TotalChars);
                }
            }
        }else{
            for(var i = 0; i < PhraseData.length; i++)	{
                if(IsA1Char(PhraseData[i], ForSpanish) == false){
                    Codes.push(PhraseData[i]);
                    SpaceCount += 1;
                }else{
                    var Value = PhraseData[i] - PassData[(i - SpaceCount) % PassData.length];
                    if (Value < 1){
                        Value += TotalChars;
                    }
                Codes.push(Value % TotalChars);
                }
            }
        }
        document.getElementById('Result').value = Codes;
        return Codes;
    }
    function RebuildString(Codigos)
    {
        var ForSpanish =  LangSelected();
        var Salida = ""
        for(var i = 0; i < Codigos.length; i++)
        {
            if (IsA1Char(Codigos[i], ForSpanish) == false){
                Salida += String.fromCharCode(Codigos[i]);
            }else if (ForSpanish == 1){
                if (Codigos[i] == 15 )
                    Salida += String.fromCharCode(209);
                if (Codigos[i] == 0)
                    Salida += String.fromCharCode(90);
                if(Codigos[i] < 15 && Codigos [i] > 0)
                    Salida += String.fromCharCode(Codigos[i]+64);
                if(Codigos[i] > 15 && Codigos[i] < 28)
                    Salida += String.fromCharCode(Codigos[i]+63);
            }else if (ForSpanish != 1){
                if (Codigos[i] == 0){
                    Salida += String.fromCharCode(90);
                }else{
                    Salida += String.fromCharCode(Codigos[i]+64);
                }
            }	
        }
        document.getElementById('Result').value = Salida;
    }
    
    function PhraseToArray(Text, ForSpanish){
    debugger;
        var Out = [];
        for(var i = 0; i < Text.length; i++){
            var CodeChar = Text.charCodeAt(i);
            if(IsLetter(CodeChar, ForSpanish) == true){
                Out.push(AsciiToA1(CodeChar, ForSpanish));
            }else{
                Out.push(CodeChar);
            }
        }
        return Out;
    }