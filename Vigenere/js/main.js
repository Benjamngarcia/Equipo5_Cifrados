function LangSelected() {
    var radios = document.getElementsByName("Lang");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return Number(radios[i].value);
        }
    }
}
function AsciiToA1(Char1, ParaEsp) { //-----------FILTRAR Ñ COMO CARACTER ESPECIAL -------------
    Char1 = Char1;
    if (IsEnie(Char1) == true) return 15;
    if (IsLower(Char1, ParaEsp)) Char1 -= 32;
    if (ParaEsp == 1) {
        if (Char1 - 64 < 15) {
            return Char1 - 64;
        } else if (Char1 - 64 >= 15 && Char1 - 64 < 28) {
            return Char1 - 63;
        }
    } //--------TERMINA DE FILTRAR Ñ--------------
    if (ParaEsp != 1) return Char1 - 64;
} 
function IsLetter(c, ParaEsp) {
    return IsUpper(c, ParaEsp) || IsLower(c, ParaEsp);
}

function IsEnie(Char2) {
    if (Char2 == 209 || Char2 == 241) {
        return true;
    } else {
        return false;
    }
}

function IsUpper(Char3, ParaEsp) {
    if (ParaEsp == 1) {
        if (IsEnie(Char3)) {
            return true;
        } else if (Char3 >= 65 && Char3 <= 90) {
            return true;
        }
    } else if (ParaEsp != 1) {
        if (Char3 >= 65 && Char3 <= 90) return true;
        else return false;
    }
}

function IsLower(Char4, ParaEsp) {
    if (ParaEsp == 1) {
        if (IsEnie(Char4)) {
            return true;
        } else if (Char4 >= 97 && Char4 <= 122) {
            return true;
        }
    } else if (ParaEsp != 1) {
        if (Char4 >= 97 && Char4 <= 122) return true;
        else return false;
    }
}

function IsA1Char(Char5, ParaEsp) {
    if (ParaEsp == 1) {
        if (Char5 > 27) {
            return false;
        } else {
            return true;
        }
    } else if (Char5 > 26 && ParaEsp != 1) {
        return false;
    } else {
        return true;
    }
}

function Encriptar(ModeEnc, ParaEsp) { //-----------SE CIERRAN VALORES DEL 1 AL 27 POR ESO SE USA ForSpanish
    var ParaEsp = LangSelected();
    var GetPhrase = document.getElementById("InputText").value;
    var GetPass = document.getElementById("PassWord").value;
    var Codigos = [];
    var TotalChars;
    if (ParaEsp == 1) TotalChars = 27;
    else TotalChars = 26;
    if (GetPhrase.length < 1 || GetPass.length < 1) {
        alert("La frase/contraseña no puede estar en blanco");
        return;
    }
    var PassData = PhraseToArray(GetPass, ParaEsp);
    var PhraseData = PhraseToArray(GetPhrase, ParaEsp);
    var SpaceCount = 0;

    if (ModeEnc == true) {
        for (var i = 0; i < PhraseData.length; i++) {
            if (IsA1Char(PhraseData[i], ParaEsp) == false) {
                Codigos.push(PhraseData[i]);
                SpaceCount += 1;
            } else if (IsA1Char(PhraseData[i], ParaEsp) == true) {
                Codigos.push(
                    (PassData[(i - SpaceCount) % PassData.length] + PhraseData[i]) %
                    TotalChars
                );
            }
        }
    } else {
        for (var i = 0; i < PhraseData.length; i++) {
            if (IsA1Char(PhraseData[i], ParaEsp) == false) {
                Codigos.push(PhraseData[i]);
                SpaceCount += 1;
            } else {
                var Value =
                    PhraseData[i] - PassData[(i - SpaceCount) % PassData.length];
                if (Value < 1) {
                    Value += TotalChars;
                }
                Codigos.push(Value % TotalChars)-1;
            }
        }
    }
    document.getElementById("Result").value = Codigos;
    return Codigos;
}
function RebuildString(Codigos) { //------------ForSPanish=LangSelected
    var ParaEsp = LangSelected();
    var Salida = "";
    for (var i = 0; i < Codigos.length; i++) {
        if (IsA1Char(Codigos[i], ParaEsp) == false) {
            Salida += String.fromCharCode(Codigos[i]);
        } else if (ParaEsp == 1) {
            if (Codigos[i] == 15) Salida += String.fromCharCode(209);
            if (Codigos[i] == 0) Salida += String.fromCharCode(90);
            if (Codigos[i] < 15 && Codigos[i] > 0)
                Salida += String.fromCharCode(Codigos[i] + 63);
            if (Codigos[i] > 15 && Codigos[i] < 28)
                Salida += String.fromCharCode(Codigos[i] + 64);
        } else if (ParaEsp != 1) {
            if (Codigos[i] == 0) {
                Salida += String.fromCharCode(90);
            } else {
                Salida += String.fromCharCode(Codigos[i] + 64);
            }
        }
    }
    document.getElementById("Result").value = Salida;
}

function PhraseToArray(Text, ParaEsp) { //----------SE  USA LA  FILTRACION DE Ñ (ASCII TO A1) se empiezan a asignar valores a las letras en un rango de 0 al infinito
    debugger;
    var Out = [];
    for (var i = 0; i < Text.length; i++) {//----------SE VA PASANDO LETRA POR LETRA 
        var CodeChar = Text.charCodeAt(i);
        if (IsLetter(CodeChar, ParaEsp) == true) {
            Out.push(AsciiToA1(CodeChar, ParaEsp));
        } else {
            Out.push(CodeChar);
        }
    }
    return Out;
}
