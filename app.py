from flask import Flask, render_template #importando o framework do Flask
app = Flask(__name__)
@app.route('/') #criando uma rota na primeira pagina
def home():
    return  render_template(
        'index.html'
    )
if __name__ == '__main__':
    app.run(debug=True)