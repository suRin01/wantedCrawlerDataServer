
import {queryStrings} from "../common/constants";
import {database} from "../util/database";
interface rowData{
	idx: number;
	id: string;
	age: number;
	name: string;
}

interface excutionResult {
    status: boolean;
    data: Array<rowData>;
}





export class mapper{
	private db:database;
	constructor(){
		this.db = new database();

	}
	public mapper = async (query: string, data?:string[]): Promise<excutionResult> =>{
		//Get database Connection
		const conn = await this.db.getConnection();
		if(conn === undefined){
			console.log("database connection failed.");
			return {status: false, data: []};
		}
	
		//Excute query
		const result = await conn.query(
			query,
			data
		)
			.catch((err: Error)=>{
				console.log(err);
			});
	
		//Relase connection and return 
		try{
			conn.release();
		}
		catch(err){
			console.log(err);
		}
	
		//Return result
		if(Array.isArray(result)){
			const resultArr: Array<rowData> = [];
			if(result !== undefined){
				for(let idx = 0, len = (result[0] as any[]).length; idx< len; idx++){
					const tempResult = (result[0] as any[])[idx];
					resultArr.push({idx:tempResult.idx , id:tempResult.id, age:tempResult.age, name:tempResult.name});
				}
	
			}
	
			return {status: true, data: resultArr};
		}
		else if(result !== undefined){
			return {status: true, data: []};
		}
		else{
			return {status: false, data: []};
		}
	}
}



const test = async ()=>{

	console.log(queryStrings.getUserList);

	const dbMapper = new mapper();
	const result = await dbMapper.mapper(queryStrings.getUserList);
	console.log(result);
};

test();

