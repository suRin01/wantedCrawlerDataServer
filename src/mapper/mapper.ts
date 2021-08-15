import {database} from "../util/database";
interface rowData{
	idx: number;
	page_id: string;
	company_name: number;
	company_address: string;
	hiring_position: string;
}

interface excutionResult {
    status: number;
    data: Array<rowData>;
}




export class mapper{
	private db:database;
	constructor(){
		this.db = new database();

	}
	public mapper = async (query: string, data:string[] = []): Promise<excutionResult> =>{
		//Get database Connection
		const conn = await this.db.getConnection();
		if(conn === undefined){
			console.log("database connection failed.");
			return {status: 500, data: []};
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
	
		const resultArr: Array<rowData> = [];
		//Return result
		if(Array.isArray(result)){
			if(result !== undefined){
				for(let idx = 0, len = (result[0] as any[]).length; idx< len; idx++){
					const tempResult = (result[0] as any[])[idx];
					resultArr.push({idx:tempResult.idx , page_id:tempResult.page_id, company_name:tempResult.company_name, company_address:tempResult.company_address, hiring_position: tempResult.hiring_position});
				}
	
			}
	
			return {status: 200, data: resultArr};
		}
		else if(result !== undefined){
			return {status: 200, data: resultArr};
		}
		else{
			return {status: 500, data: resultArr};
		}
	}
}