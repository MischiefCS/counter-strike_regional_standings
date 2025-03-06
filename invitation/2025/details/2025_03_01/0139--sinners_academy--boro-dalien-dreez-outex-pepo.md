### Roster Details<br />
Team Name: SINNERS Academy<br />
Roster: BORO, DALIEN, dreez, outex, Pepo<br />
Global Rank: [139](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  704.7<br />
<br />
Final Rank Value (704.7) = Starting Rank Value (718.1) + Head To Head Adjustments (-13.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.114[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 718.1
- 400 + ( ( 0.165 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 718.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1315 | 2024-11-22 | BRUTE               | L   | 0.538      | -            | -                | -                | -         |    -9.38 | BORO, DALIEN, dreez, outex, Pepo |
|            5 |     1454 | 2024-11-15 | Dusty Roots         | L   | 0.492      | -            | -                | -                | -         |    -7.12 | BORO, DALIEN, outex, Pepo, STYKO |
|            4 |     1461 | 2024-11-15 | Partizan Esports    | W   | 0.491      | 0.617        | 0.081 (0.025)    | 0.565 (0.171)    | 1 (0.491) |    13.62 | BORO, DALIEN, outex, Pepo, STYKO |
|            3 |     1470 | 2024-11-14 | Kitsune Esports     | W   | 0.488      | 0.617        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.488) |     2.28 | BORO, DALIEN, outex, Pepo, STYKO |
|            2 |     1507 | 2024-11-13 | Team Czech Republic | L   | 0.480      | -            | -                | -                | -         |    -9.60 | BORO, DALIEN, outex, Pepo, STYKO |
|            1 |     1510 | 2024-11-13 | The Huns Esports    | L   | 0.480      | -            | -                | -                | -         |    -3.14 | BORO, DALIEN, outex, Pepo, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($340.25)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.552 | $616.62        | $340.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
