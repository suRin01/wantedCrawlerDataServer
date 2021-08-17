export class queryStrings{
    public static readonly getUserList:string = "SELECT * FROM `MVC_test`.`wantedJobData`";
    public static readonly insertUser:string = "INSERT INTO `MVC_test`.`wantedJobData` (`page_id`, `company_name`, `company_address`, `hiring_position`) VALUES (?, ?, ?, ?)";
    // public static readonly deleteUser:string = "DELETE FROM `MVC_test`.`wantedJobData` WHERE (`id` = ?)";
    // public static readonly patchUser:string = "UPDATE `MVC_test`.`wantedJobData` SET `age` = ? WHERE (`id` = ?);";

}
