from flask import Flask
from flask import request
from flask import jsonify
import pywikibot
#import re

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/wiki')
def parse():
	url = request.args.get('url')
	entry_name = url.split('/wiki/')[1]
	site = pywikibot.Site('en', 'wikipedia') 
	page = pywikibot.Page(site, entry_name)
	page_profile = {}
	created = str(page.oldest_revision['timestamp'])[0:10]
	creator = page.oldest_revision['user']
	page_profile['created'] = created
	page_profile['creator'] = creator
	last_edit = str(page.latest_revision['timestamp'])[0:10]
	last_editor = page.latest_revision['user']
	page_profile['last_edit'] = last_edit
	page_profile['last_editor'] = last_editor
	edits = page.revision_count()
	page_profile['edits'] = edits
	contributors = page.contributors()
	top20_contributors = contributors.most_common(20)
	top20_contributors

	top20_contributors_list = []
	for each in top20_contributors:
		user = each[0]
		contributor_dict = {}
		contributor_dict['user'] = user
		contributor_dict['edits'] = each[1]
		contributor_dict['url'] = "https://en.wikipedia.org/wiki/User:" + user
		top20_contributors_list.append(contributor_dict)

	page_profile['top20_contributors'] = top20_contributors_list

	return jsonify(page_profile)

