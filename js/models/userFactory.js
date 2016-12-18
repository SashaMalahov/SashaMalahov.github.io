class User {
		constructor(){}
		Create(){}    	
}

class EnglishUser extends User {	
	constructor(){
		super();		
		this._nationality = 'English user';
	}

	Create(userName,newsObserver){
		return new EnglishTechnologyUser(userName,newsObserver);
	}
}

class GermanUser extends User {
 	constructor(){
		super();		
		this._nationality = 'German user';
 	}

	Create(userName,newsObserver){
		return new GermanAdapter(userName,newsObserver);
	}
}

class TechnologyUser {
	constructor(userName,newsObserver){
		this._userName = userName;
	    this._newsObserver = newsObserver;
		this._newsObserver.attachObserver(this);
	}

	Update(newsDescription){
			console.log('New technology news was received with the following descripton: ' + newsDescription);
	}
}

class EnglishTechnologyUser extends TechnologyUser {
	constructor(userName,newsObserver){
		super(userName,newsObserver);
		this._userCountry = 'England';
	}	
}

class GermanTechnologyUser extends TechnologyUser {
	constructor(userName,newsObserver){
		super(userName,newsObserver);
		this._userCountry = 'Germany';
	}

	Aktualisieren(newsDescription){
		console.log('Neue Technologie-Neuigkeiten wurden mit der folgenden Beschreibung erhalten: ' + newsDescription);
	}
}

class GermanAdapter extends TechnologyUser {
    constructor(userName,newsObserver) {
        super(userName,newsObserver);
        this._germanTechnologyUser = new GermanTechnologyUser(userName,newsObserver);
    }

    Update(newsDescription) {
        this._germanTechnologyUser.Aktualisieren(newsDescription);
    }
}

module.exports = {User,EnglishUser,GermanUser,TechnologyUser,EnglishTechnologyUser,GermanTechnologyUser,GermanAdapter}



