// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { Button, Switch, Picker, Text, TouchableOpacity, View } from 'react-native';

// App dependencies
import grades from './../fixtures';
import Activity from './../Activity';
import type { Activity as ActivityDef, Grade } from './../types';

// Component dependencies
import style from './style';

type State = {
  gradeIndex: number,
  activeCategories: string[],
  grades: Grade[],
  activity: ?ActivityDef,
};

export default class App extends PureComponent<{}, State> {

  constructor () {
    super();
    this.state = {
      gradeIndex: 0,
      activeCategories: grades[0].content.map(({ title }) => title),
      grades,
      activity: null,
    };
  }

  toggleCategory (category: string) {
    this.updateCategory(category, !this.state.activeCategories.includes(category));
  }

  updateCategory (category: string, add: boolean = true) {
    this.setState(({ activeCategories }) => ({
      activeCategories: add
        ? [...new Set(activeCategories.concat(category))] // dedupes
        : activeCategories.filter(cat => cat !== category),
      activity: null,
    }));
  }

  handlePressNext () {
    const options = this.getOptions();
    this.setState({
      activity: options[Math.floor(Math.random() * (options.length - 1))],
    });
  }

  getOptions () {
    const { grades, gradeIndex, activeCategories } = this.state;
    return grades[gradeIndex].content
      .filter(({ title }) => activeCategories.includes(title))
      .reduce((result, category) => {
        return result.concat(category.items.map(item => ({
          ...item,
          category,
        })));
      }, []);
  }

  render() {

    const gradeData = this.state.grades[this.state.gradeIndex];

    return (
      <View style={style.root}>
        <Picker
          selectedValue={this.state.gradeIndex}
          onValueChange={(_, gradeIndex) => this.setState({ gradeIndex })}
        >
          {this.state.grades.map((grade, index) => (
            <Picker
              key={index}
              value={index}
              label={`Grade ${grade.grade}`}
            />
          ))}
        </Picker>
        <View style={style.categories}>
          {gradeData.content.map((category, index) => (
            <View style={style.category} key={index}>
              <Switch
                value={this.state.activeCategories.includes(category.title)}
                onValueChange={isOn => this.updateCategory(category.title, isOn)}
              />
              <TouchableOpacity onPress={() => this.toggleCategory(category.title)}>
                <Text style={style.categoryText}>{category.title}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          {this.state.activity !== null && <Activity activity={this.state.activity} />}
        </View>
        <Button title="Next" onPress={() => this.handlePressNext()} />
      </View>
    );
  }
}
