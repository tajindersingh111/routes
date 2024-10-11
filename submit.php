<script>
                            // Fetch route IDs from the backend
                            fetch('/fetch-routes')
                                .then(response => response.json())
                                .then(data => {
                                    const tableBody = document.querySelector('.shgrid-pkg_body-tr');
                                    const tableRows = tableBody.parentNode;
                            
                                    // Clear existing table rows
                                    tableRows.innerHTML = '';
                            
                                    // Create table rows for each route
                                    data.forEach(route => {
                                        const tableRow = document.createElement('tr');
                                        tableRow.classList.add('shgrid-pkg_body-tr', 'shgrid-pkg_odd-darker');
                            
                                        // Create table cells for each column
                                        const tableCells = [
                                            `<td class="shgrid-pkg_td shgrid-pkg_selection-td">
                                                <input type="checkbox" class="shgrid-pkg_selection-checkbox shgrid-pkg_checkbox">
                                            </td>`,
                                            `<td class="shgrid-pkg_td">
                                                <a href="" class="shgrid-pkg_td-link shgrid-pkg_hover-highlight-row">${route.vehicle}</a>
                                            </td>`,
                                            `<td class="shgrid-pkg_td">
                                                <a href="" class="shgrid-pkg_td-link shgrid-pkg_hover-highlight-row">${route.depot}</a>
                                            </td>`,
                                            `<td class="shgrid-pkg_td">
                                                <a href="" class="shgrid-pkg_td-link shgrid-pkg_hover-highlight-row">${route.date}</a>
                                            </td>`,
                                            `<td class="shgrid-pkg_td">
                                                <a href="" class="shgrid-pkg_td-link shgrid-pkg_hover-highlight-row">${route.route_id}</a>
                                            </td>`,
                                            `<td class="shgrid-pkg_td">
                                                <a href="" class="shgrid-pkg_td-link shgrid-pkg_hover-highlight-row">edit</a>
                                            </td>`,
                                        ];
                            
                                        // Append table cells to table row
                                        tableRow.innerHTML = tableCells.join('');
                            
                                        // Append table row to table body
                                        tableRows.appendChild(tableRow);
                                    });
                                })
                                .catch(err => console.error('Error fetching routes:', err));
                            </script>
                        </body>
                        </html>