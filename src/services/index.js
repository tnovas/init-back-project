import Infrastructure from 'src/infrastructure';

class Services {
	constructor(){
		this.infrastructure = new Infrastructure();
	}

	get() {
		let result = this.infrastructure.get();
		return `services ${result}`;		
	}
}

export default Services;