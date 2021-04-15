import React, { Component } from 'react';
import './Main.css';
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';


export default class Main extends Component {

    state = {
        newTarefa: '',
        tarefas: [
            'beber água',
            'trabalhar',
            'fazer tarfea'
        ],
        index: -1,
    }
    handleSubmit = (e) => {
        e.preventDefault();

        let { newTarefa } = this.state;
        const { tarefas } = this.state;
        newTarefa = newTarefa.trim();

        if (tarefas.indexOf(newTarefa) === -1) return;
        const newTarefas = [...tarefas];



        if (index === -1) {
            this.setState({
                tarefas: [...newTarefas, newTarefa],
                newTarefa: ''
            });
        }else {
            newTarefa[index] =  newTarefa;
        }
    }

    handleTarefa = (e) => {
        this.setState({
            newTarefa: e.target.value
        });
    }

    handleDelete = (e, index) => {
        // console.log('edit',index);

        const { tarefas } = this.state;
        const newTarefas = [...tarefas]
        newTarefas.splice(index, 1);

        this.setState({ tarefas: [...newTarefas] });
    }

    handleEdit = (e) => {
        const { tarefas } = this.state;
        this.setState({
            index,
            newTarefa: tarefas[index]
        })
    }


    render() {
        const { newTarefa, tarefas, tarefa } = this.state;
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form action="#" className="Form" onSubmit={this.handleSubmit}>
                    <input type="text"
                        onChange={this.handleTarefa}
                        value={newTarefa} />
                    <button type="submit"><FaPlus /></button>
                </form>

                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={ }>{tarefa}
                            <div>
                                <FaEdit className="edit" onClick={this.handleEdit(e, index)} />
                                <FaWindowClose onClick={this.handleDelete(e, index)} className="delete" />
                            </div>
                        </li>
                    ))}

                </ul>

            </div>
        );
    }
}