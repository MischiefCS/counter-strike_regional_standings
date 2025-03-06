### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [169](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [106]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  519.3<br />
<br />
Final Rank Value (519.3) = Starting Rank Value (513.5) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.5
- 400 + ( ( 0.052 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 513.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      920 | 2024-12-12 | 9INE                 | L   | 0.236      | -            | -                | -                | -         |    -1.09 | acoR, niko, sirah, valde, Zyphon |
|            8 |      943 | 2024-12-10 | Iberian Soul         | L   | 0.223      | -            | -                | -                | -         |    -1.43 | acoR, niko, sirah, valde, Zyphon |
|            7 |      969 | 2024-12-08 | Illuminar Gaming     | W   | 0.209      | 0.371        | 0.002 (0.000)    | 0.077 (0.006)    | 0 (0.000) |     4.59 | acoR, niko, sirah, valde, Zyphon |
|            6 |     1018 | 2024-12-06 | Natus Vincere Junior | L   | 0.197      | -            | -                | -                | -         |    -0.73 | acoR, niko, sirah, valde, Zyphon |
|            5 |     1116 | 2024-12-02 | Endpoint             | W   | 0.170      | 0.371        | 0.005 (0.000)    | 0.083 (0.005)    | 0 (0.000) |     3.96 | acoR, niko, sirah, valde, Zyphon |
|            4 |     1295 | 2024-11-22 | Ninjas in Pyjamas    | L   | 0.109      | -            | -                | -                | -         |    -0.92 | acoR, niko, sirah, valde, Zyphon |
|            3 |     1324 | 2024-11-21 | PARIVISION           | W   | 0.102      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.102) |     1.46 | acoR, niko, sirah, valde, Zyphon |
|            2 |     1337 | 2024-11-21 | Virtus.pro           | L   | 0.097      | -            | -                | -                | -         |    -0.01 | acoR, niko, sirah, valde, Zyphon |
|            1 |     1347 | 2024-11-20 | 3DMAX                | L   | 0.095      | -            | -                | -                | -         |    -0.01 | acoR, niko, sirah, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
