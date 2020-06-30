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
    
    function rispostaInterlocutore() {
        var numeroRisposta = Math.floor(Math.random () * 2) + 1;
        console.log(numeroRisposta);
        var numeroChat= $(".messages:visible").attr("data-chat");
        console.log(numeroChat);
        if(numeroChat == 1){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Wherever you go, I'll be with you <3 </span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'> Ci sono tanti mondi, ma tutti condividono lo stesso cielo. Un solo cielo, un solo destino. </span></div></div>");
                    break;
            } 
        } else if(numeroChat == 2){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Turn to DARKNESS!!!! </span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Sarò io a mangiare la papaya insieme a Kairi, non Sora <3 :D</span></div></div>");
                    break;
            }
        } else if (numeroChat == 3) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Ohohohohohohohohoh!!</span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>All men are my servants!!</span></div></div>");
                    break;
            } 
        } else if (numeroChat == 4) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Let's super go!</span></div></div>");
                    break;
                case 2: 
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Supeeeeeer......UNIVEEEEERSEEEEEE!!!! </span></div></div>");
                    break;
            }
        } else if (numeroChat == 5) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>I'll destroy all of you!</span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'> Hahahahahahahaha!!!! </span></div></div>");
                    break;
            }
        } else if (numeroChat == 6) {
            switch(numeroRisposta) {
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>The power of LOOOVEEEE! </span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Are you okay? </span></div></div>");
                    break;
            }
        } else if(numeroChat == 7) {
            switch(numeroRisposta) {
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Where would you like to go, dude?</span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>DUDE!</span></div></div>");
                    break;
            }
        } else if(numeroChat == 8){
            switch(numeroRisposta) {
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Let me thank you.</span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Ultimate demon technique, ultimate skill...MACROOOOOOOCOOSSSSSM!!!!!!</span></div></div>");
                    break;
            }
        } else if(numeroChat == 9){
            switch(numeroRisposta){
                case 1: 
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Se è la disperazione che cerchi..allora ti aiuterò a cercarla io! </span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Felice di vederti, Cloud</span></div></div>");
                    break;
            }
        } else if(numeroChat == 10){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>La tua Luce...non perderla di vista. </span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Sephiroth. Tell me if you see him.</span></div></div>");
                    break;
            }
        } else if(numeroChat == 11) {
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>MALA TEMPORA CURRUNT!</span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Principessaaaaaa!!!</span></div></div>");
                    break;
            }
        } else if(numeroChat == 12){
            switch(numeroRisposta){
                case 1:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>Vogliamo c-credere che l'avere il dono della v-vita in q-questo mondo, non s-sia un e-errore!</span></div></div>");
                    break;
                case 2:
                    $(".messages:visible").append("<div class='friend-messages-contenitor'><div class='friend-messages'><img class='dropdown' src='./img/arrow.webp'/><div class='delete-msg' style='display: none;'>Elimina messaggio</div><span class='messages-written'>S-signorina?</span></div></div>");
                    break;
            }
        }
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
            $(".messages:visible").append('<div class="my-messages-contenitor"><div class="my-messages"><img class="dropdown" src="./img/arrow.webp"/><div class="delete-msg" style="display: none;">Elimina messaggio</div><span class="messages-written">' + $("#write").val() + '</span></div></div>');
            $("#write").val("");
            setTimeout(rispostaInterlocutore,1000);
        });

        $("#search").keyup(ricercaUtente);

        $(document).on('click', '.dropdown', function(){
            $(this).siblings(".delete-msg").toggle();
        })

        $(document).on('click', '.delete-msg', function(){
            $(this).parent().parent().remove();
        })
    })


// Poter inviare il messaggio con Invio
// scrollare la chat per far vedere l'ultimo messaggio inviato
// Fare un controllo per non inviare messaggi vuoti