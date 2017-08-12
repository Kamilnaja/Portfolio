/**
 * Created by Kamil on 2017-02-27.
 */
var container = document.getElementById('visualisation');

var items = new vis.DataSet([
  {id: 1, content: 'Ukończony pierwszy kurs HTML', start: '2013-09-20'},
  {id: 2, content: 'Pierwsza strona WWW', start: '2014-01-20'},
  {id: 3, content: 'Front-end Developer w Mapa Zdrowia', start: '2016-06-28', end: '2017-01-31'},
  {id: 4, content: 'Front-end Developer w firmie CreateIt', start: '2017-02-01'},
  {id: 5, content: 'Rozpoczęcie nauki JavaScript', start: '2016-01-01'},
  {id: 6, content: 'Nauka tworzenia stron RWD', start: '2015-10-01'},
  {id: 7, content: "Kurs PHP oraz Symfony(podstawy)", start: '2016-08-01'},
  {id: 8, content: "Rozpoczęcie nauki Angular2 & AngularJS", start: '2016-05-01'},
  {id: 9, content: "Rozpoczęcie nauki Node.js", start: '2017-02-01'},
  {id: 11, content: 'Praca jako freelancer - copywriting, content-marketing', start: '2013-11-25', end: '2015-10-01'},
  {id: 12, content: 'Front-end Developer w Nexio', start: '2017-06-06'},
  {id: 14, content: 'Rozpoczęcie nauki React.js', start: '2017-06-01'}
]);

var options = {
  clickToUse: true
};
var timeline = new vis.Timeline(container, items, options);

var nodes = new vis.DataSet([
  {id: 1, label: 'Programowanie Webowe'},
  {id: 2, label: 'JS'},
  {id: 3, label: 'HTML5'},
  {id: 4, label: 'CSS'},
  {id: 5, label: 'SASS'},
  {id: 6, label: 'LESS'},
  {id: 7, label: 'LESS'},
  {id: 8, label: 'LESS'},
  {id: 9, label: 'Symphony(podstawy)'},
  {id: 10, label: 'PHP'}


]);

