using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuctionService.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Auctions_Items_ItemId",
                table: "Auctions");

            migrationBuilder.DropIndex(
                name: "IX_Auctions_ItemId",
                table: "Auctions");

            migrationBuilder.DropColumn(
                name: "ItemId",
                table: "Auctions");

            migrationBuilder.AddColumn<Guid>(
                name: "AuctionId",
                table: "Items",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Items_AuctionId",
                table: "Items",
                column: "AuctionId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Auctions_AuctionId",
                table: "Items",
                column: "AuctionId",
                principalTable: "Auctions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Auctions_AuctionId",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_AuctionId",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "AuctionId",
                table: "Items");

            migrationBuilder.AddColumn<Guid>(
                name: "ItemId",
                table: "Auctions",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Auctions_ItemId",
                table: "Auctions",
                column: "ItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Auctions_Items_ItemId",
                table: "Auctions",
                column: "ItemId",
                principalTable: "Items",
                principalColumn: "Id");
        }
    }
}
