    // Manejo de modales
    $('#deleteModal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget);
        const userId = button.data('user-id');
        const username = button.data('username');
        
        $('#userToDelete').text(username);
        $('#confirmDelete').data('user-id', userId);
    });

    $('#editModal').on('show.bs.modal', function(event) {
        const button = $(event.relatedTarget);
        const userId = button.data('user-id');
        const username = button.data('username');
        const email = button.data('email');
        
        $('#editUserId').val(userId);
        $('#editUsername').val(username);
        $('#editEmail').val(email);
    });

    // Acción de eliminar
    $('#confirmDelete').click(function() {
        const userId = $(this).data('user-id');
        // Aquí iría la lógica para eliminar
        console.log('Eliminar usuario:', userId);
        $('#deleteModal').modal('hide');
    });

    // Acción de guardar cambios
    $('#saveChanges').click(function() {
        const userData = {
            id: $('#editUserId').val(),
            username: $('#editUsername').val(),
            email: $('#editEmail').val(),
            role: $('#editRole').val()
        };
        // Aquí iría la lógica para guardar
        console.log('Guardar cambios:', userData);
        $('#editModal').modal('hide');
    });