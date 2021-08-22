export class queryStrings{
    public static readonly getJobList:string = "SELECT * FROM `Develop`.`wantedJobData`";
    public static readonly insertJob:string = "INSERT INTO `Develop`.`wantedJobData` (`page_id`, `company_name`, `company_address`, `hiring_position`) VALUES (?, ?, ?, ?)";
    // public static readonly deleteUser:string = "DELETE FROM `Develop`.`wantedJobData` WHERE (`id` = ?)";
    // public static readonly patchUser:string = "UPDATE `Develop`.`wantedJobData` SET `age` = ? WHERE (`id` = ?);";

}
