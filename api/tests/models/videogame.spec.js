const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

const db_info_test = {
  name : "Genshin Impact",
  description : "Simple description text",
  platforms : ["Linux" , "Nintendo Switch" , "PC" , "PlayStation 4" , "Xbox One"],
  image : "https://cdn.sortiraparis.com/images/80/66131/912171-genshin-impact-summer-with-genshin-le-festival-dedie-debarque-a-paris.jpg",
  released : "10/12/2000",
  rating : "4.7"
} 

describe('Videogame Model', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
  }));

  describe('Validators', () => {

    beforeEach(() => Videogame.sync({ force: true }));

    describe('UUID', () => {

      it('Should generate UUID as primary key', async () => {
        const createdVideogame = await Videogame.create(db_info_test);
        expect(createdVideogame.id).to.be.a('string').and.match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
      
      });
    });

    describe('Name', () => {

      it('Should throw an error if the property "name" is null', async () => {
        try {
          const db_info_test1 = {...db_info_test, name : null}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should throw an error if name is not unique', async () => {
        
        await Videogame.create(db_info_test);

        try {
          await Videogame.create(db_info_test);
        } catch (error) {
          expect(error.name).to.equal('SequelizeUniqueConstraintError');
        }
      });

      it('Should work when the property "name" is valid', async () => {
        const createdVideogame = await Videogame.create(db_info_test);
        expect(createdVideogame.dataValues.name).to.equal(db_info_test.name);
      });
    });

    describe('Platforms', () => {

      it('Should throw an error if the property "platforms" is null', async () => {
        try {
          const db_info_test1 = {...db_info_test, platforms : null}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should work when the property "platforms" is valid', async () => {
        const createdVideogame = await Videogame.create(db_info_test);
        expect(createdVideogame.dataValues.platforms).to.deep.equal(db_info_test.platforms);
      });
    });

    describe('Image', () => {

      it('Should throw an error if the property "image" is null', async () => {
        try {
          const db_info_test1 = {...db_info_test, image : null}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should throw an error if the property "image" is not an URL', async () => {
        try {
          const db_info_test1 = {...db_info_test, image : "ImageExampleWrong"}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should work when the property "image" is valid', async () => {
        const createdVideogame = await Videogame.create(db_info_test);
        expect(createdVideogame.dataValues.image).to.equal(db_info_test.image);
      });
    });

    describe('Released', () => {

      it('Should throw an error if the property "released" is null', async () => {
        try {
          const db_info_test1 = {...db_info_test, released : null}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should work when the property "released" is valid', async () => {
        const createdVideogame = await Videogame.create(db_info_test);
        expect(createdVideogame.dataValues.released).to.equal(db_info_test.released);
      });
    });

    describe('Rating', () => {

      it('Should throw an error if the property "rating" is null', async () => {
        try {
          const db_info_test1 = {...db_info_test, rating : null}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should throw an error if the property "rating" is greater than 5', async () => {
        try {
          const db_info_test1 = {...db_info_test, rating : "6"}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should throw an error if the property "rating" is less than 0', async () => {
        try {
          const db_info_test1 = {...db_info_test, rating : "-1"}
          await Videogame.create(db_info_test1);
        } catch (error) {
          expect(error.name).to.equal('SequelizeValidationError');
        }
      });

      it('Should work when the property "rating" is valid', async () => {
        const createdVideogame = await Videogame.create(db_info_test);
        expect(createdVideogame.dataValues.rating).to.equal(db_info_test.rating);
      });
    });
  });
});