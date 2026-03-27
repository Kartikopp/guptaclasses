import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Welcome to Guptaclasses'),
      ),
      body: Column(
        children: [
          _buildWelcomeBanner(),
          _buildStatisticsCards(),
          _buildFeaturedCoursesCarousel(),
          _buildAnnouncementsSection(),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }

  Widget _buildWelcomeBanner() {
    return Container(
      padding: EdgeInsets.all(16.0),
      color: Colors.blue,
      child: Text(
        'Welcome to Your Learning Journey!',
        style: TextStyle(color: Colors.white, fontSize: 24),
      ),
    );
  }

  Widget _buildStatisticsCards() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        _buildStatisticCard('Courses Completed', '15'),
        _buildStatisticCard('New Announcements', '3'),
        _buildStatisticCard('Featured Courses', '5'),
      ],
    );
  }

  Widget _buildStatisticCard(String title, String value) {
    return Card(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          ListTile(
            title: Text(title),
            subtitle: Text(value),
          ),
        ],
      ),
    );
  }

  Widget _buildFeaturedCoursesCarousel() {
    return Container(
      height: 200,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          _buildCourseCard('Course 1'),
          _buildCourseCard('Course 2'),
          _buildCourseCard('Course 3'),
        ],
      ),
    );
  }

  Widget _buildCourseCard(String courseName) {
    return Card(
      child: Container(
        width: 160,
        child: Center(
          child: Text(courseName),
        ),
      ),
    );
  }

  Widget _buildAnnouncementsSection() {
    return Container(
      padding: EdgeInsets.all(16.0),
      child: Column(
        children: [
          Text('Announcements', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          ListTile(title: Text('New course available: Flutter Basics')),  
          ListTile(title: Text('Reminder: Weekly quiz on Friday!')),  
        ],
      ),
    );
  }
}