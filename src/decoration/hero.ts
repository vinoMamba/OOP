interface Hero {
    readonly heroName: string;

    [key: string]: any;
}

export class SpiderMan implements Hero {
    constructor(public heroName: string) {
        this.heroName = heroName;
    }
}

class Skill {
    constructor(public hero: Hero) {
    }
}

class Tusi extends Skill {
    constructor(hero: Hero) {
        super(hero);
    }

    createTusi() {
        this.hero.tusi = "吐司";
    }
}

type SkillType = "tusi"

export class SkillFactory {
    createSkill(skill: SkillType, hero: Hero) {
        if (skill === "tusi") {
            return new Tusi(hero).createTusi();
        }
    }
}