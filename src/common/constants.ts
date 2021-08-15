//1차 에러-> queryStrings의 키가 암시적으로 any, 오류
export class queryStrings{
    public static readonly getUserList:string = "SELECT * FROM `MVC_test`.`wanted`";
    public static readonly insertUser:string = "INSERT INTO `MVC_test`.`wanted` (`page_id`, `company_name`, `company_address`, `hiring_position`) VALUES (?, ?, ?, ?)";
    public static readonly deleteUser:string = "DELETE FROM `MVC_test`.`wanted` WHERE (`id` = ?)";
    public static readonly patchUser:string = "UPDATE `MVC_test`.`wanted` SET `age` = ? WHERE (`id` = ?);";

}
