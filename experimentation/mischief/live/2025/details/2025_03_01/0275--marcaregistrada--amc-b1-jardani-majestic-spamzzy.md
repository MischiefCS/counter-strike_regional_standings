### Roster Details<br />
Team Name: MarcaRegistrada<br />
Roster: amc, b1, Jardani, Majestic, spamzzy<br />
Global Rank: [275](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [69]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  592.4<br />
<br />
Final Rank Value (592.4) = Starting Rank Value (602.9) + Head To Head Adjustments (-10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.226[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 602.9
- 400 + ( ( 0.104 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 602.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      315 | 2025-02-15 | MCS Gaming       | L   | 1.000      | -            | -                | -                | -         |   -13.62 | amc, b1, Jardani, Majestic, spamzzy |
|            8 |      365 | 2025-02-14 | Team Aether      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.111 (0.016)    | 0 (0.000) |    10.46 | amc, b1, Jardani, Majestic, spamzzy |
|            7 |      661 | 2025-02-06 | Akimbo Esports   | L   | 1.000      | -            | -                | -                | -         |   -13.18 | amc, b1, Jardani, Majestic, spamzzy |
|            6 |     1501 | 2024-12-13 | Vagrants         | L   | 0.682      | -            | -                | -                | -         |    -9.52 | amc, b1, Jardani, majestic, spamzzy |
|            5 |     1509 | 2024-12-13 | Immigrants Peek  | W   | 0.682      | 0.143        | 0.001 (0.000)    | 0.369 (0.036)    | 0 (0.000) |    11.44 | amc, b1, Jardani, majestic, spamzzy |
|            4 |     2543 | 2024-11-17 | APX Energy       | L   | 0.508      | -            | -                | -                | -         |    -8.23 | amc, b1, Jardani, Majestic, Medusa  |
|            3 |     2614 | 2024-11-16 | Angelicas BFS    | W   | 0.502      | 0.143        | 0.000 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     7.10 | amc, b1, Jardani, Majestic, Medusa  |
|            2 |     4042 | 2024-09-27 | Party Astronauts | W   | 0.168      | 0.143        | 0.008 (0.000)    | 0.400 (0.010)    | 0 (0.000) |     3.78 | 4TAYLOR, amc, b1, Jardani, Majestic |
|            1 |     4049 | 2024-09-27 | RazDva           | W   | 0.168      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.28 | 4TAYLOR, amc, b1, Jardani, Majestic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($126.73)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-18 |      0.516 | $245.69        | $126.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
