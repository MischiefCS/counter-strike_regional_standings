### Roster Details<br />
Team Name: TSM<br />
Roster: acoR, niko, sirah, valde, Zyphon<br />
Global Rank: [132](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [87]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  673.7<br />
<br />
Final Rank Value (673.7) = Starting Rank Value (670.5) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.043[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.5
- 400 + ( ( 0.131 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 670.5


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
|           11 |      920 | 2024-12-12 | 9INE                 | L   | 0.422      | -            | -                | -                | -         |    -3.69 | acoR, niko, sirah, valde, Zyphon |
|           10 |      943 | 2024-12-10 | Iberian Soul         | L   | 0.410      | -            | -                | -                | -         |    -4.26 | acoR, niko, sirah, valde, Zyphon |
|            9 |      969 | 2024-12-08 | Illuminar Gaming     | W   | 0.396      | 0.371        | 0.004 (0.001)    | 0.161 (0.024)    | 0 (0.000) |     6.87 | acoR, niko, sirah, valde, Zyphon |
|            8 |     1018 | 2024-12-06 | Natus Vincere Junior | L   | 0.383      | -            | -                | -                | -         |    -2.68 | acoR, niko, sirah, valde, Zyphon |
|            7 |     1116 | 2024-12-02 | Endpoint             | W   | 0.357      | 0.371        | 0.007 (0.001)    | 0.154 (0.020)    | 0 (0.000) |     6.42 | acoR, niko, sirah, valde, Zyphon |
|            6 |     1295 | 2024-11-22 | Ninjas in Pyjamas    | L   | 0.295      | -            | -                | -                | -         |    -3.28 | acoR, niko, sirah, valde, Zyphon |
|            5 |     1324 | 2024-11-21 | PARIVISION           | W   | 0.288      | 0.143        | 0.002 (0.000)    | 0.022 (0.001)    | 1 (0.288) |     4.22 | acoR, niko, sirah, valde, Zyphon |
|            4 |     1337 | 2024-11-21 | Virtus.pro           | L   | 0.284      | -            | -                | -                | -         |    -0.05 | acoR, niko, sirah, valde, Zyphon |
|            3 |     1347 | 2024-11-20 | 3DMAX                | L   | 0.282      | -            | -                | -                | -         |    -0.08 | acoR, niko, sirah, valde, Zyphon |
|            2 |     1934 | 2024-10-16 | 9Pandas              | L   | 0.044      | -            | -                | -                | -         |    -0.29 | acoR, niko, sirah, valde, Zyphon |
|            1 |     1957 | 2024-10-15 | 3DMAX                | L   | 0.038      | -            | -                | -                | -         |    -0.01 | acoR, niko, sirah, valde, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($423.33)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.071 | $6,000.00      | $423.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
