using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.API.Migrations
{
    public partial class UpdateSenderIDMessages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SendId",
                table: "Messages");

            migrationBuilder.AlterColumn<int>(
                name: "SenderId",
                table: "Messages",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "SenderId",
                table: "Messages",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "SendId",
                table: "Messages",
                nullable: false,
                defaultValue: 0);
        }
    }
}
