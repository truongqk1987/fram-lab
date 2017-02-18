module.exports = function(grunt) {

    grunt.initConfig({
        lessPath: 'resources/assets/less',
		destCSSPath: 'public/css',
        less: {
            development: {
                options: {
                    paths: ['<%= lessPath %>']
                },
                files: [
                    {
                        '<%= lessPath %>/dist/dashboard.css': '<%= lessPath %>/modules.less',
                    },
                ]
            },
        },
        cssmin: {
            target: {
                files: [
                    {
                        '<%= destCSSPath %>/dashboard.min.css': ['<%= lessPath %>/dist/dashboard.css']
                    },
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['less','cssmin']);

};