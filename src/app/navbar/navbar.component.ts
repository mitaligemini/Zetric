import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    document.getElementById("drop")!.addEventListener("click", function(e) {
      document.getElementById("myDropdown")!.classList.toggle("show");
    });
    
    
    // Close the dropdown if the user clicks outside of it
    window.addEventListener("click", function(event ) {
      if (!(event.target as HTMLInputElement).matches('.dropbtn')) {
        document.querySelectorAll(".dropdown-content.show")
          .forEach(openDropdown => openDropdown.classList.remove('show'))
      }
    });
    
  }

  logout(){
    this.authService.logoutUser();
    window.location.reload();
  }

}
