import { Component, OnInit } from '@angular/core';
import { selectData } from '../FirebaseRealtimeDB/RealtimeDB'; // Sesuaikan path sesuai dengan struktur proyek Anda

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    blogs: any[] = [];

    constructor() { }

    async ngOnInit(): Promise<void> {
        // Ambil data dari path /Owner menggunakan service
        selectData('Owner').then((data) => {
            if (data) {
                console.log('Data from /Owner:', data);
            } else {
                console.log('No data available at /Owner');
            }
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });

        try {
            const data = await selectData('blog');
            if (data) {
            this.blogs = Object.values(data);
            console.log(this.blogs);
            } else {
            console.log('No data available at /Blog');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}