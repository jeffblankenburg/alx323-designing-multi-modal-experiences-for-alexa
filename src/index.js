'use strict';

var Alexa = require("alexa-sdk");

const makeTextContent = Alexa.utils.TextUtils.makeTextContent;
const makePlainText = Alexa.utils.TextUtils.makePlainText;
const makeRichText = Alexa.utils.TextUtils.makeRichText;
const makeImage = Alexa.utils.ImageUtils.makeImage;

var handlers = {
    "LaunchRequest": function() {
        var speakText = "Welcome to the Display Template Generator.  Which template can I show you?";
        var listenText = "Which template would you like to see?";
        this.response.speak(speakText).listen(listenText);
        this.response.cardRenderer("Card Title", "Card Text", {smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png",                                                                              largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png"});
        this.response.hint("did you try turning it off and back on again?")
        
        console.log("THIS.RESPONSE = " + JSON.stringify(this.response));

        this.emit(":responseReady");
    },
    "BodyTemplateOne": function() {
        var speakText = "This is Body Template 1.  You can see that there is not a main image on this one.  Is there another template you'd like to see?";
        var listenText = "Which template would you like to see?";
        this.response.speak(speakText).listen(listenText);
        this.response.cardRenderer("BodyTemplate1 Title", "BodyTemplate1 Text", {smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png",                                                                              largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png"});
        this.response.hint("can you tell me how to get to Sesame Street?")
        
        if (supportsDisplay.call(this))
        {
            var builder = new Alexa.templateBuilders["BodyTemplate1Builder"]();
            
            var backgroundImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1024x600-display-background._TTH_.png");
        
            var primary = makePlainText("BodyTemplate1 Primary Text");
            var secondary = makePlainText("BodyTemplate1 Secondary Text");
            var tertiary = makePlainText("BodyTemplate1 Tertiary Text");

            var title = "BodyTemplate1 Display Title";
            var token = "TOKEN";
        
            builder.setTitle(title);
            builder.setToken(token);
            builder.setBackgroundImage(backgroundImage);
            builder.setTextContent(primary, secondary, tertiary);
            builder.setBackButtonBehavior("HIDDEN");
            let template = builder.build();
        
            this.response.renderTemplate(template);
        }
        
        console.log("THIS.RESPONSE = " + JSON.stringify(this.response));

        this.emit(":responseReady");
    },
    "BodyTemplateTwo": function() {
        var speakText = "This is Body Template 2.  The main image is shown on the right side of the screen, and our hint is displayed.  Which other template can I show you?";
        var listenText = "Which template would you like to see?";
        this.response.speak(speakText).listen(listenText);
        this.response.cardRenderer("BodyTemplate2 Title", "BodyTemplate2 Text", {smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png",                                                                              largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png"});
        this.response.hint("why is Jarvis Pact an anagram of JavaScript?")
        
        if (supportsDisplay.call(this))
        {
            var builder = new Alexa.templateBuilders["BodyTemplate2Builder"]();
            
            var backgroundImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1024x600-display-background._TTH_.png");
            var mainImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/340x340-display-image._TTH_.png");
        
            var primary = makePlainText("BodyTemplate2 Primary Text");
            var secondary = makePlainText("BodyTemplate2 Secondary Text");
            var tertiary = makePlainText("BodyTemplate2 Tertiary Text");

            var title = "BodyTemplate2 Display Title";
            var token = "TOKEN";
        
            builder.setImage(mainImage);
            builder.setTitle(title);
            builder.setToken(token);
            builder.setBackgroundImage(backgroundImage);
            builder.setTextContent(primary, secondary, tertiary);
            builder.setBackButtonBehavior("HIDDEN");
            let template = builder.build();
        
            this.response.renderTemplate(template);
        }
        
        console.log("THIS.RESPONSE = " + JSON.stringify(this.response));

        this.emit(":responseReady");
    },
    "BodyTemplateThree": function() {
        var speakText = "This is Body Template 3.  The main image is shown on the left side of the screen.  Which other template can I show you?";
        var listenText = "Which template would you like to see?";
        this.response.speak(speakText).listen(listenText);
        this.response.cardRenderer("BodyTemplate3 Title", "BodyTemplate3 Text", {smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png",                                                                              largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png"});
        this.response.hint("why don't you show this hint on the screen?")
        
        if (supportsDisplay.call(this))
        {
            var builder = new Alexa.templateBuilders["BodyTemplate3Builder"]();
            
            var backgroundImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1024x600-display-background._TTH_.png");
            var mainImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/340x340-display-image._TTH_.png");
        
            var primary = makePlainText("BodyTemplate3 Primary Text");
            var secondary = makePlainText("BodyTemplate3 Secondary Text");
            var tertiary = makePlainText("BodyTemplate3 Tertiary Text");

            var title = "BodyTemplate3 Display Title";
            var token = "TOKEN";
        
            builder.setImage(mainImage);
            builder.setTitle(title);
            builder.setToken(token);
            builder.setBackgroundImage(backgroundImage);
            builder.setTextContent(primary, secondary, tertiary);
            builder.setBackButtonBehavior("HIDDEN");
            let template = builder.build();
        
            this.response.renderTemplate(template);
        }
        
        console.log("THIS.RESPONSE = " + JSON.stringify(this.response));

        this.emit(":responseReady");
    },
    "BodyTemplateSix": function() {
        var speakText = "This is Body Template 6.  The main image is gone, and the text is justified to the bottom of the screen.  Hints are shown on this one.  Which other template can I show you?";
        var listenText = "Which template would you like to see?";
        this.response.speak(speakText).listen(listenText);
        this.response.cardRenderer("BodyTemplate6 Title", "BodyTemplate6 Text", {smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png",                                                                              largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png"});
        this.response.hint("can you tell me how to get to Sesame Street?")
        
        if (supportsDisplay.call(this))
        {
            var builder = new Alexa.templateBuilders["BodyTemplate6Builder"]();
            
            var backgroundImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1024x600-display-background._TTH_.png");
            var mainImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/340x340-display-image._TTH_.png");
        
            var primary = makePlainText("BodyTemplate6 Primary Text");
            var secondary = makePlainText("BodyTemplate6 Secondary Text");
            var tertiary = makePlainText("BodyTemplate6 Tertiary Text");

            var title = "BodyTemplate6 Display Title";
            var token = "TOKEN";
        
            builder.setImage(mainImage);
            builder.setTitle(title);
            builder.setToken(token);
            builder.setBackgroundImage(backgroundImage);
            builder.setTextContent(primary, secondary, tertiary);
            builder.setBackButtonBehavior("HIDDEN");
            let template = builder.build();
        
            this.response.renderTemplate(template);
        }
        
        console.log("THIS.RESPONSE = " + JSON.stringify(this.response));

        this.emit(":responseReady");
    },
    "ListTemplateOne": function() {
        var speakText = "This is List Template 1.  This is a vertically scrolling list, and you'll notice that we don't have hint text on this one again.  Which other template can I show you?";
        var listenText = "Which template would you like to see?";
        this.response.speak(speakText).listen(listenText);
        this.response.cardRenderer("ListTemplate1 Title", "ListTemplate1 Text", {smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png",                                                                              largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png"});
        this.response.hint("this text doesn't get shown because of scrolling.")
        
        if (supportsDisplay.call(this))
        {
            var builder = new Alexa.templateBuilders["ListTemplate1Builder"]();
            
            var backgroundImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1024x600-display-background._TTH_.png");

            var title = "ListTemplate1 Display Title";
            var token = "TOKEN";

            var itemList = [];
            
            for (var i = 0; i< 20; i++)
            {
                var itemToken = "TOKEN" + i;
                var image = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/88x88-list-image._TTH_.png", 88, 88, "X_SMALL", "Item Description");
                var primaryText = "Primary " + i;
                var secondaryText = "Secondary Text " + i;
                var tertiaryText = "Tertiary Text " + i;
                var textContent = makeTextContent(makePlainText(primaryText), makePlainText(secondaryText), makePlainText(tertiaryText));
                var newItem = {"token": itemToken, "image": image, "textContent": textContent};
                console.log("NEW ITEM = " + JSON.stringify(newItem));
                itemList.push(newItem);
            }

        
            builder.setTitle(title);
            builder.setToken(token);
            builder.setListItems(itemList);
            builder.setBackgroundImage(backgroundImage);
            builder.setBackButtonBehavior("HIDDEN");
            let template = builder.build();
        
            this.response.renderTemplate(template);
        }
        
        console.log("THIS.RESPONSE = " + JSON.stringify(this.response));

        this.emit(":responseReady");
    },
    "ListTemplateTwo": function() {
        var speakText = "This is List Template 2.  This is a horizontally scrolling list, and the hint text is displayed here.  Which other template can I show you?";
        var listenText = "Which template would you like to see?";
        this.response.speak(speakText).listen(listenText);
        this.response.cardRenderer("ListTemplate2 Title", "ListTemplate2 Text", {smallImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/720x480-small-card._TTH_.png",                                                                              largeImageUrl: "https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1200x800-large-card._TTH_.png"});
        this.response.hint("is there a maximum number of items I can put in a list?")
        
        if (supportsDisplay.call(this))
        {
            var builder = new Alexa.templateBuilders["ListTemplate2Builder"]();
            
            var backgroundImage = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/1024x600-display-background._TTH_.png");

            var title = "ListTemplate2 Display Title";
            var token = "TOKEN";

            var itemList = [];
            var imageList = ["192x280-list-image-portrait", "280x280-list-image-square", "372x280-list-image-4-3", "498x280-list-image-16-9", "192x280-list-image-portrait", "280x280-list-image-square", "372x280-list-image-4-3", "498x280-list-image-16-9", "192x280-list-image-portrait", "280x280-list-image-square", "372x280-list-image-4-3", "498x280-list-image-16-9"];
            var widthList = [192, 280, 372, 298, 192, 280, 372, 298, 192, 280, 372, 298];
            
            for (var i = 0; i< 10; i++)
            {
                var itemToken = "TOKEN" + i;
                var image = makeImage("https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/display-templates/" + imageList[i] + "._TTH_.png", widthList[i], 280, "X_SMALL", "Item Description");
                var primaryText = "Primary " + i;
                var secondaryText = "Secondary Text " + i;
                var tertiaryText = "Tertiary Text " + i;
                var textContent = makeTextContent(makePlainText(primaryText), makePlainText(secondaryText), makePlainText(tertiaryText));
                var newItem = {"token": itemToken, "image": image, "textContent": textContent};
                console.log("NEW ITEM = " + JSON.stringify(newItem));
                itemList.push(newItem);
            }

        
            builder.setTitle(title);
            builder.setToken(token);
            builder.setListItems(itemList);
            builder.setBackgroundImage(backgroundImage);
            builder.setBackButtonBehavior("HIDDEN");
            let template = builder.build();
        
            this.response.renderTemplate(template);
        }
        
        console.log("THIS.RESPONSE = " + JSON.stringify(this.response));

        this.emit(":responseReady");
    },
    "AMAZON.CancelIntent": function () {
        var speechText = "Cancel Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.HelpIntent": function () {
        var speechText = "Help Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.MoreIntent": function() {
        var speechText = "More Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.NavigateHomeIntent": function() {
        var speechText = "Navigate Home Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.NavigateSettingsIntent": function() {
        var speechText = "Navigate Settings Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.NextIntent": function() {
        var speechText = "Next Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.PageDownIntent": function() {
        var speechText = "Page Down Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.PageUpIntent": function() {
        var speechText = "Page Up Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.PreviousIntent": function() {
        var speechText = "Previous Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.ScrollDownIntent": function() {
        var speechText = "Scroll Down Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.ScrollLeftIntent": function() {
        var speechText = "Scroll Left Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.ScrollRightIntent": function() {
        var speechText = "Scroll Right Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "AMAZON.StopIntent": function () {
        var speechText = "Stop Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "ElementSelected": function () {
        var speechText = "Element Selected Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    },
    "SessionEndedRequest": function() {
        var speechText = "Session Ended Request Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
     },
    "Unhandled": function() {
        var speechText = "Unhandled Intent";
        this.response.speak(speechText);
        this.emit(":responseReady");
    }
};

function buildAllTheThings(speechText, listenText, cardTitle, cardText, cardSmallImage, cardLargeImage, displayTemplate, displayTitle, displayToken, displayPrimaryText, displaySecondaryText, displayTertiaryText, displayBackgroundImage, displayImage)
{

}

exports.handler = function (event, context) {
    console.log("EVENT " + JSON.stringify(event));
    console.log("CONTEXT " + JSON.stringify(context));
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function supportsDisplay()
{
    var hasDisplay = this.event.context && this.event.context.System && this.event.context.System.device && this.event.context.System.device.supportedInterfaces && this.event.context.System.device.supportedInterfaces.Display;
    return hasDisplay;
}