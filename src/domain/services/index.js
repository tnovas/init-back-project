import Api from 'src/apis';

class Service {
	constructor(){
		this.api = new Api();
	}

	get() {
		let result = this.api.get();
		return `service ${result}`;		
	}
}

export default Service;