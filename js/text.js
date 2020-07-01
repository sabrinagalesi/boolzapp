/* MILESTONE 1 
    -Replica della grafica ​ con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse 
    -Aggiunta di un messaggio​ : l’utente scrive un testo nella parte bassa e cliccando “invia” il testo viene aggiunto al thread sopra, come messaggio verde 
   MILESTONE 2 
    -Risposta dall’interlocutore: ​ ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo. 
    -Ricerca utenti: ​ scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti 
    il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
   MILESTONE 3
    -Click sul contatto​ mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione 
    - Cancella messaggio: ​ cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato.
    */
    function generaMessaggio(messaggio) {
        return "<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>" + 
            messaggio + 
        "</span></div></div>";
    }


    function rispostaInterlocutore() {
        var numeroRisposta = Math.floor(Math.random () * 2) + 1;
        console.log(numeroRisposta);
        var numeroChat= $(".messages:visible").attr("data-chat");
        console.log(numeroChat);
        if(numeroChat == 1){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("Wherever you go, I'll be with you <3"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Ci sono tanti mondi, ma tutti condividono lo stesso cielo. Un solo cielo, un solo destino."));
                    break;
            } 
        } else if(numeroChat == 2){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("Turn to DARKNESS!!!!"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Sarò io a mangiare la papaya insieme a Kairi, non Sora <3 :D"));
                    break;
            }
        } else if (numeroChat == 3) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("Ohohohohohohohohoh!!"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("All men are my servants!!"));
                    break;
            } 
        } else if (numeroChat == 4) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("Let's super go!"));
                    break;
                case 2: 
                    $(".messages:visible").append(generaMessaggio("Supeeeeeer......UNIVEEEEERSEEEEEE!!!!"));
                    break;
            }
        } else if (numeroChat == 5) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("I'll destroy all of you!"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Hahahahahahahaha!!!!"));
                    break;
            }
        } else if (numeroChat == 6) {
            switch(numeroRisposta) {
                case 1:
                    $(".messages:visible").append(generaMessaggio("The power of LOOOVEEEE!"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Are you okay?"));
                    break;
            }
        } else if(numeroChat == 7) {
            switch(numeroRisposta) {
                case 1:
                    $(".messages:visible").append(generaMessaggio("Where would you like to go, dude?"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("DUDE!"));
                    break;
            }
        } else if(numeroChat == 8){
            switch(numeroRisposta) {
                case 1:
                    $(".messages:visible").append(generaMessaggio("Let me thank you."));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Ultimate demon technique, ultimate skill...MACROOOOOOOCOOSSSSSM!!!!!!"));
                    break;
            }
        } else if(numeroChat == 9){
            switch(numeroRisposta){
                case 1: 
                    $(".messages:visible").append(generaMessaggio("Se è la disperazione che cerchi..allora ti aiuterò a cercarla io!"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Felice di vederti, Cloud"));
                    break;
            }
        } else if(numeroChat == 10){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("La tua Luce...non perderla di vista."));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Sephiroth. Tell me if you see him."));
                    break;
            }
        } else if(numeroChat == 11) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("MALA TEMPORA CURRUNT!"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("Principessaaaaaa!!!"));
                    break;
            }
        } else if(numeroChat == 12){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append(generaMessaggio("Vogliamo c-credere che l'avere il dono della v-vita in q-questo mondo, non s-sia un e-errore!"));
                    break;
                case 2:
                    $(".messages:visible").append(generaMessaggio("S-signorina?"));
                    break;
            }
        }
        $(".messages:visible").scrollTop($(".messages:visible").height());
    }

    function ricercaUtente() {
        var utenti= $(".name-account");
        $(utenti).each(function(){
            var utenteSingolo = $(this).text().trim().toLowerCase();
            if(utenteSingolo.includes($("#search").val().toLowerCase())) {
                console.log(utenteSingolo, "account trovato");
                $(this).parent().show();
            } else{
                $(this).parent().hide();
            }
        })
    }


    $(document).ready(function(){
        $(".friends-account").click(function(){
            $("#first-screen").hide();
            $("#contenitor-components").show();

            //Prendere il data attribute di quello che ho cliccato 
            var attribute = $(this).attr("data-account");
            var contenitoreMessaggi = $(".messages[data-chat='" + attribute + "']") //$( "input[value='Hot Fuzz']" )
            $(".messages").hide();
            contenitoreMessaggi.show();

            //Cerco la src dell'account che ho selezionato, cerco anche il testo, dopodichè devo aggiungerglo allo spazio sopra i messaggi
            var id= $(this).find("img").attr("id");
            var img=$(this).find("img").attr("src");
            var text = $(this).find("span").text().trim();
            $("#contenitor-account-selected img").attr("id", id).attr("src", img);
            $("#contenitor-account-selected span").text(text);
        })

        $("#arrow").click(function(){
            var messaggio= $("#write").val();
            if(messaggio.length != 0) {
                $(".messages:visible").append('<div class="my-messages-contenitor"><div class="my-messages"><img class="dropdown" src="./img/arrow.webp"/><div class="delete-msg" style="display: none;">Elimina messaggio</div><span class="messages-written">' + $("#write").val() + '</span></div></div>');
                $("#write").val("");
                setTimeout(rispostaInterlocutore,1000);
                $(".messages:visible").scrollTop($(".messages:visible").height());
            }
        });

        $("#write").keyup(function(e){
            if(e.keyCode === 13) {
                $("#arrow").click();
            }
        })

        $("#search").keyup(ricercaUtente);

        $(document).on('click', '.dropdown', function(){
            $(this).siblings(".delete-msg").toggle();
        })

        $(document).on('click', '.delete-msg', function(){
            $(this).parent().parent().remove();
        })

    })


// Poter inviare il messaggio con Invio FATTO
// scrollare la chat per far vedere l'ultimo messaggio inviato FATTO
// Fare un controllo per non inviare messaggi vuoti FATTO