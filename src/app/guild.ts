export class Guild {
    title: string;
    guildID: string;
    adminRole: string = '';
    developerRole: string = '';

    constructor(title: string, guildID: string) {
        this.title = title;
        this.guildID = guildID;
    }
}
