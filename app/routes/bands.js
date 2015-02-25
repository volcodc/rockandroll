import Ember from 'ember';
import songs from '../mixins/songs';

var Band = Ember.Object.extend({
	name: '',
	language: '',

	slug:function(){
		console.log('Recomputing slug');
		return this.get('name').dasherize();
	}.property('name'),

	site: function(){
		console.log('Recomputing site');
		return 'http://bands.com/' + this.get('slug') + '.' + this.get('language');
	}.property('slug', 'language'),

	songs: function(){
		return songs.filterBy('band', this.get('name'));
	}.property('name', 'songs.@each.band')

});

var ledZeppelin = Band.create({ name: 'Led Zeppelin' });
var pearlJam = Band.create({ name: 'Pearl Jam' });
var fooFighters = Band.create({ name: 'Foo Fighters' });

var bands = [ledZeppelin, pearlJam, fooFighters];

export default Ember.Route.extend({
	model: function() {
		return bands;
	}
});
