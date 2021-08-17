import {database} from "../util/database";
interface rowData{
	idx: number;
	pageId: string;
	companyName: number;
	companyAddress: string;
	hiringPosition: string;
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
					resultArr.push({idx:tempResult.idx , pageId:tempResult.page_id, companyName:tempResult.company_name, companyAddress:tempResult.company_address, hiringPosition: tempResult.hiring_position});
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