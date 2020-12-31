from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def about():
    return render_template('about.html')


@app.route('/CV-contact.html')
def ccContact():
    return render_template('CV-contact.html')

@app.route('/assignment8')
def assignment8():
    return render_template('assignment8.html', fullName={'firstName':'Tomer','lastName':'Mizrahi'}, hobbies = {'gaming','swiming','camping'})


if __name__ == '__main__':
    app.run()
