
                // Begrüßungstext für Kunde
                document.getElementById("kunde").innerHTML ="Dear " + anrede + " " + name + ", <br><br>" +
                "our important feedback comes from you. <br>" +
                "With seven quick answers, you help us to continuously optimize our service for you and to (even) better meet your requirements and expectations. <br>" +
                bearbeiter + " and the entire service team look forward to your feedback. <br><br>" +
                "Your HENRICHSEN service management <br>" + 
                "of the HENRICHSEN Group";

                bearbeiter = unescape(bearbeiter).replace(" ", "");
                const bearbeiter_split = bearbeiter.split(",");
                
                var mail = bearbeiter_split[1] + "." + bearbeiter_split[0] + "@henrichsen.de";
                
                if ( mail == "undefined." + bearbeiter_split[0] + "@henrichsen.de") {

                         mail = "bastian.adam@henrichsen.de"
                         
                }
                
                bearbeiter = bearbeiter_split[1] + " " + bearbeiter_split[0];

function createEmail() {
    var allCorrect = true;
    var  Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne;

    Bearbeitungszeit = document.querySelector('input[name="Bearbeitungszeit"]:checked').value;

    Lösung           = document.querySelector('input[name="Loesung"]:checked').value;
    
    Freundlichkeit   = document.querySelector('input[name="Freundlichkeit"]:checked').value;
    
    Klarheit         = document.querySelector('input[name="Klarheit"]:checked').value;
    
    Schwierigkeit    = document.querySelector('input[name="Schwierigkeit"]:checked').value;
    
    Verbesserungen   = document.getElementById("text").value;

    try {
        Sterne           = document.querySelector('input[name="Sternebewertung"]:checked').value;
    }
    catch (e) {

        allCorrect = false;
    }

    if (allCorrect == true) {
        sendEmail(name, unternehmen, ticket, bearbeiter, anrede, Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne, mail);
    
        createLink(id, Sterne);
    }
    else  {
        document.getElementById("star").innerHTML = "Whoops... Forgot star rating &#x1F609;" ;
    }    
}
                              
function sendEmail( name, unternehmen, ticket, bearbeiter, anrede, Bearbeitungszeit, Lösung, Freundlichkeit, Klarheit, Schwierigkeit, Verbesserungen, Sterne, mail) {

    Email.send({
    Host: "smtp.gmail.com",
    Username: "noreplayhen@gmail.com",
    Password: "Email123!",
    To: mail + ", support@henrichsen.de, jeannette.bastian@henrichsen.de, christian.sagmeister@henrichsen.de, andre.baltheiser@henrichsen.de",
    From: "noreplayhen@gmail.com",
    Subject: ticket + " wurde bewertet",
    Body:  " Alle Daten: <br><br> Name: " + anrede + " " + name + " <br> Unternehmen: " + unternehmen + "<br> Ticketnummer: " + ticket + "<br> Bearbeiter: " + bearbeiter + "<br> <br> Ergebnis: <br> <br> " + 
        
            
    
            "Der Kunde ist mit der Bearbeitungszeit der Anfrage <b>" + Bearbeitungszeit + "</b><br><br>" + 
            "Der Kunde ist mir der gefundenen L&ouml;sung <b>" + Lösung + "</b><br><br>" +
            "Der Kunde ist mit der Freundlichkeit der Servicemitarbeiter <b>" + Freundlichkeit + "</b><br><br>" +
            "Der Kunde ist mit der Klarheit der Antwort <b>" + Klarheit + "</b><br><br>" +
            "Für den Kunden ist es <b>" + Schwierigkeit + "</b> ein Ticket aufzugeben <br><br>" + 
            "Der Kunde hat uns folgende Verbesserungen empfohlen: <b>" + Verbesserungen + "</b><br><br>" +
            anrede + " " + name + " hat unseren Service mit <b>" + Sterne + " Sterne </b> bewertet"
         
            
   })
   
}  



function createLink(id, Sterne) {
    var Link ="https://henrichsen.topdesk.net/solutions/five-star-review-1/process/" + id + "/" + Sterne + "/TcmtnqxCxR_EfAeEyw2K53ypMz_23UhCa2ZRq2_QF62qb1VqEiVGqS9mqGJPI_5T9wWlf2YSoUC_ywhLuiTNBg";
    window.open(Link);
    
}

