### Roster Details<br />
Team Name: Preasy Esport<br />
Roster: AcilioN, Beccie, Griller, Patti, Viggo<br />
Global Rank: [136](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  664.1<br />
<br />
Final Rank Value (664.1) = Starting Rank Value (687.6) + Head To Head Adjustments (-23.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.024[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.6
- 400 + ( ( 0.139 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 687.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       79 | 2025-02-23 | ARCRED                                    | L   | 0.912      | -            | -                | -                | -         |   -12.23 | AcilioN, Beccie, Griller, Patti, Viggo |
|            9 |       83 | 2025-02-23 | GardenGarage                              | W   | 0.911      | 0.143        | 0.000 (0.000)    | 0.083 (0.011)    | 0 (0.000) |    11.19 | AcilioN, Beccie, Griller, Patti, Viggo |
|            8 |       90 | 2025-02-23 | AMKAL ESPORTS                             | W   | 0.911      | 0.143        | 0.000 (0.000)    | 0.313 (0.041)    | 0 (0.000) |    11.47 | AcilioN, Beccie, Griller, Patti, Viggo |
|            7 |      237 | 2025-02-15 | RUBY                                      | L   | 0.858      | -            | -                | -                | -         |   -19.00 | AcilioN, Beccie, Griller, Patti, Viggo |
|            6 |      717 | 2025-01-07 | Copenhagen Wolves (American organization) | W   | 0.598      | 0.284        | 0.007 (0.001)    | 0.661 (0.112)    | 0 (0.000) |    12.19 | AcilioN, Beccie, Griller, Patti, Viggo |
|            5 |      795 | 2024-12-20 | Astralis Talent                           | L   | 0.477      | -            | -                | -                | -         |    -7.15 | AcilioN, Beccie, Equip, Griller, Viggo |
|            4 |      806 | 2024-12-19 | ADEPTS                                    | L   | 0.470      | -            | -                | -                | -         |   -10.66 | AcilioN, Beccie, Equip, Griller, Viggo |
|            3 |      808 | 2024-12-19 | KONO.ECF                                  | L   | 0.469      | -            | -                | -                | -         |    -6.69 | AcilioN, Beccie, Equip, Griller, Viggo |
|            2 |     1108 | 2024-12-02 | Monte                                     | L   | 0.359      | -            | -                | -                | -         |    -3.99 | AcilioN, Beccie, Equip, Griller, Viggo |
|            1 |     1705 | 2024-11-02 | MASONIC                                   | W   | 0.159      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.159) |     1.38 | AcilioN, Beccie, Equip, Griller, JBOEN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,421.58)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-07 |      0.598 | $2,000.00      | $1,196.94       |
| 2024-11-02 |      0.159 | $1,415.01      | $224.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
